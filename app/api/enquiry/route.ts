import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, company, message } = body;

        // Basic validation
        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Phone validation
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
            return NextResponse.json(
                { error: 'Invalid phone number format' },
                { status: 400 }
            );
        }

        // Here you can add your backend logic:
        // 1. Save to database
        // 2. Send email notification
        // 3. Integrate with CRM
        // 4. Send to third-party service

        // Send email notification to contact@zidbit.com

        try {
            const resend = new Resend(process.env.RESEND_API_KEY);

            await resend.emails.send({
                from: 'noreply@zidbit.com', // Must be a verified domain in Resend
                to: 'contact@zidbit.com',
                subject: 'New Enquiry from Website',
                html: `
                    <h2>New Enquiry Received</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Company:</strong> ${company || 'Not provided'}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                    <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
                `,
            });

            console.log('Email sent successfully to contact@zidbit.com');
        } catch (emailError) {
            console.error('Error sending email:', emailError);
            // Don't fail the request if email fails, just log it
        }

        // Send Telegram notification
        try {
            const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
            const telegramChatId = process.env.TELEGRAM_CHAT_ID;

            if (telegramBotToken && telegramChatId) {
                const telegramMessage = `
🔔 *New Enquiry from Website*

👤 *Name:* ${name}
📧 *Email:* ${email}
📱 *Phone:* ${phone}
🏢 *Company:* ${company || 'Not provided'}
💬 *Message:*
${message}

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

                console.log('Telegram notification sent successfully');
            }
        } catch (telegramError) {
            console.error('Error sending Telegram notification:', telegramError);
            // Don't fail the request if Telegram fails, just log it
        }

        // For now, we'll just log the enquiry and return success
        console.log('New Enquiry Received:', {
            name,
            email,
            phone,
            company: company || 'Not provided',
            message,
            timestamp: new Date().toISOString(),
        });

        // Example: Send email notification (you can integrate with services like SendGrid, Nodemailer, etc.)
        // await sendEmailNotification({
        //   to: 'your-email@example.com',
        //   subject: 'New Enquiry from Website',
        //   body: `
        //     New enquiry received:
        //     Name: ${name}
        //     Email: ${email}
        //     Phone: ${phone}
        //     Company: ${company || 'Not provided'}
        //     Message: ${message}
        //   `
        // });

        // Example: Save to database
        // await saveEnquiryToDatabase({
        //   name,
        //   email,
        //   phone,
        //   company,
        //   message,
        //   createdAt: new Date(),
        // });

        return NextResponse.json(
            {
                success: true,
                message: 'Enquiry submitted successfully'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error processing enquiry:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// Optional: Handle GET requests to return enquiry form schema or info
export async function GET() {
    return NextResponse.json({
        message: 'Enquiry API endpoint',
        fields: ['name', 'email', 'phone', 'company', 'message'],
        requiredFields: ['name', 'email', 'phone', 'message']
    });
}