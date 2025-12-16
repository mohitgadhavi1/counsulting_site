import { NextRequest, NextResponse } from 'next/server';

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