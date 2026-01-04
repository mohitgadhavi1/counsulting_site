import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { Resend } from 'resend';

export const runtime = "nodejs";

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const role = formData.get("role")?.toString() ?? "";
        const email = formData.get("email")?.toString() ?? "";
        const resume = formData.get("resume") as File | null;

        const errors: string[] = [];
        if (!role.trim()) errors.push("role is required");
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            errors.push("valid email is required");
        if (!resume) errors.push("resume file is required");

        if (errors.length) {
            return NextResponse.json({ ok: false, errors }, { status: 400 });
        }

        const allowedMimes = ["application/pdf", "application/msword"];
        const filename = resume ? resume.name || "resume" : "resume";
        const ext = path.extname(filename).toLowerCase();

        if (!resume || (!allowedMimes.includes(resume.type) && !(ext === ".pdf" || ext === ".doc"))) {
            return NextResponse.json(
                { ok: false, error: "Only PDF and DOC file types are accepted" },
                { status: 400 }
            );
        }

        const arrayBuffer = await resume.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const uploadsDir = path.join(process.cwd(), "public", "uploads");
        await fs.mkdir(uploadsDir, { recursive: true });
        const safeName = `${Date.now()}-${filename.replace(/\s+/g, "-")}`;
        const filePath = path.join(uploadsDir, safeName);
        await fs.writeFile(filePath, buffer);

        // Send email notification to support@zidbit.com with resume attachment
        try {
            const resend = new Resend(process.env.RESEND_API_KEY);

            await resend.emails.send({
                from: 'noreply@zidbit.com', // Must be a verified domain in Resend
                to: 'support@zidbit.com',
                subject: 'New Job Application from Website',
                html: `
                    <h2>New Job Application Received</h2>
                    <p><strong>Role Applied For:</strong> ${role}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Resume File:</strong> ${filename}</p>
                    <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
                    <p>The resume has been uploaded to the server at: /uploads/${safeName}</p>
                `,
                attachments: [
                    {
                        filename: filename,
                        content: buffer,
                    }
                ]
            });

            console.log('Job application email sent successfully to support@zidbit.com');
        } catch (emailError) {
            console.error('Error sending job application email:', emailError);
            // Don't fail the request if email fails, just log it
        }

        // Send Telegram notification for job application
        try {
            const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
            const telegramChatId = process.env.TELEGRAM_CHAT_ID;

            if (telegramBotToken && telegramChatId) {
                const telegramMessage = `
💼 *New Job Application from Website*

🎯 *Role:* ${role}
📧 *Email:* ${email}
📄 *Resume:* ${filename}
📁 *File Path:* /uploads/${safeName}

🕒 *Time:* ${new Date().toLocaleString()}
                `.trim();

                const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

                await fetch(telegramUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: telegramChatId,
                        text: telegramMessage,
                        parse_mode: 'Markdown',
                    }),
                });

                console.log('Telegram notification sent successfully for job application');
            }
        } catch (telegramError) {
            console.error('Error sending Telegram notification:', telegramError);
            // Don't fail the request if Telegram fails, just log it
        }

        // TODO: wire this up to email or DB as needed

        return NextResponse.json({ ok: true, file: `/uploads/${safeName}` });
    } catch (err) {
        console.error("/api/join error:", err);
        return NextResponse.json({ ok: false, error: "server error" }, { status: 500 });
    }
}
