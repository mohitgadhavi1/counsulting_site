# Email & Telegram Setup Instructions

The enquiry and join APIs have been configured to send notifications to both `contact@zidbit.com` (via Resend) and Telegram.

## Setup Steps

### 1. Resend Email Setup

1. **Get Resend API Key**

   - Sign up at [resend.com](https://resend.com)
   - Go to [API Keys](https://resend.com/api-keys) and create a new key
   - Copy the API key to your `.env.local` file

2. **Verify Domain (Important)**
   - Go to [Domains](https://resend.com/domains) in Resend dashboard
   - Add and verify `zidbit.com` domain
   - This is required for the `from` address (`noreply@zidbit.com`)

### 2. Telegram Bot Setup

1. **Create Telegram Bot**

   - Open Telegram and message [@BotFather](https://t.me/botfather)
   - Send `/newbot` command
   - Follow instructions to create your bot
   - Copy the bot token provided by BotFather

2. **Get Chat ID**

   - Send a message to your bot
   - Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
   - Find your chat ID in the response (look for `"chat":{"id":123456789}`)

3. **Environment Variables**
   ```
   RESEND_API_KEY=re_your_api_key_here
   TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
   TELEGRAM_CHAT_ID=123456789
   ```

## API Endpoints

### Enquiry API (`/api/enquiry`)

- **Method**: POST
- **Fields**: name, email, phone, company (optional), message
- **Notifications**:
  - Email to contact@zidbit.com
  - Telegram message with enquiry details

### Join API (`/api/join`)

- **Method**: POST (FormData)
- **Fields**: role, email, resume (file)
- **Notifications**:
  - Email to contact@zidbit.com with resume attachment
  - Telegram message with job application details

## Notification Templates

### Email Templates

#### Enquiry Email

- **From**: noreply@zidbit.com
- **To**: contact@zidbit.com
- **Subject**: "New Enquiry from Website"
- **Contains**: Name, Email, Phone, Company, Message, Timestamp

#### Job Application Email

- **From**: noreply@zidbit.com
- **To**: contact@zidbit.com
- **Subject**: "New Job Application from Website"
- **Contains**: Role, Email, Resume filename, Timestamp
- **Attachment**: Resume file

### Telegram Templates

#### Enquiry Notification

```
🔔 New Enquiry from Website

👤 Name: John Doe
📧 Email: john@example.com
📱 Phone: +1234567890
🏢 Company: Example Corp
💬 Message: Interested in your services...

🕒 Time: 1/3/2026, 10:30:00 AM
```

#### Job Application Notification

```
💼 New Job Application from Website

🎯 Role: Frontend Developer
📧 Email: jane@example.com
📄 Resume: resume.pdf
📁 File Path: /uploads/1735901234-resume.pdf

🕒 Time: 1/3/2026, 10:30:00 AM
```

## Advantages

### Resend

- ✅ Better deliverability than SMTP
- ✅ Built-in analytics and tracking
- ✅ Reliable attachment handling

### Telegram

- ✅ Instant notifications
- ✅ Mobile-friendly
- ✅ No email delivery issues
- ✅ Rich formatting with emojis

## Error Handling

Both APIs will continue to work even if email or Telegram notifications fail. All errors are logged but don't affect the API response to maintain user experience.

## Testing

### Test Telegram Configuration

Visit `/api/test-telegram` in your browser to test your Telegram bot setup. This endpoint will:

- Check if environment variables are set
- Send a test message to your Telegram chat
- Return success/error status

After setting up both Resend and Telegram:

1. Test Telegram: Visit `http://localhost:3000/api/test-telegram`
2. Submit an enquiry form
3. Submit a job application
4. Check contact@zidbit.com for emails
5. Check your Telegram chat for instant notifications
6. Monitor Resend dashboard for email delivery status

## Troubleshooting

### Telegram Issues

- **Bot not responding**: Make sure you've sent at least one message to your bot
- **Wrong chat ID**: Visit the getUpdates URL to find the correct chat ID
- **Token invalid**: Double-check the bot token from BotFather

### Email Issues

- **Domain not verified**: Verify zidbit.com in Resend dashboard
- **API key invalid**: Check your Resend API key is correct
