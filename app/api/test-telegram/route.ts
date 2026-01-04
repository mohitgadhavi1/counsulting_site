import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
        const telegramChatId = process.env.TELEGRAM_CHAT_ID;

        if (!telegramBotToken || !telegramChatId) {
            return NextResponse.json({
                success: false,
                error: 'Telegram configuration missing. Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env.local'
            }, { status: 400 });
        }

        const testMessage = `
🧪 *Telegram Test Message*

✅ Your Telegram bot is configured correctly!
🤖 Bot Token: ${telegramBotToken.substring(0, 10)}...
💬 Chat ID: ${telegramChatId}

🕒 Test Time: ${new Date().toLocaleString()}
        `.trim();

        const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

        const response = await fetch(telegramUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: telegramChatId,
                text: testMessage,
                parse_mode: 'Markdown',
            }),
        });

        const result = await response.json();

        if (response.ok) {
            return NextResponse.json({
                success: true,
                message: 'Test message sent successfully to Telegram!',
                telegramResponse: result
            });
        } else {
            return NextResponse.json({
                success: false,
                error: 'Failed to send Telegram message',
                telegramError: result
            }, { status: 400 });
        }

    } catch (error) {
        console.error('Telegram test error:', error);
        return NextResponse.json({
            success: false,
            error: 'Internal server error while testing Telegram'
        }, { status: 500 });
    }
}