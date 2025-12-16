import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

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

        // TODO: wire this up to email or DB as needed

        return NextResponse.json({ ok: true, file: `/uploads/${safeName}` });
    } catch (err) {
        console.error("/api/join error:", err);
        return NextResponse.json({ ok: false, error: "server error" }, { status: 500 });
    }
}
