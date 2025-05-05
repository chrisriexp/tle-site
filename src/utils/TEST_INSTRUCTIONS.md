# Email Service Tests

This directory contains test utilities for the mail service.

## Setup

1. Make sure your `.env` file is properly configured with your SMTP credentials:
   ```
   MAIL_MAILER=smtp
   MAIL_HOST=smtp-mail.outlook.com
   MAIL_PORT=587
   MAIL_USERNAME=noreply@insuranceexpress.com
   MAIL_PASSWORD=your-secure-password
   MAIL_ENCRYPTION=tls
   MAIL_FROM_ADDRESS=noreply@insuranceexpress.com
   MAIL_FROM_NAME="IE Pipeline"

   # Recipient emails
   LEAD_EMAIL=quotes@theiepipeline.com
   APPOINTMENT_EMAIL=appointment@theiepipeline.com
   ```

2. Install dependencies:
   ```
   cd src/utils
   npm install
   ```

## Email Templates

The tests use the updated email templates with IE Pipeline branding. These templates feature:

- Table-based HTML layout for maximum compatibility with all email clients
- IE Pipeline branding in the header (navy blue color)
- Sections with clear headings for different parts of the data
- Responsive design that works well on mobile and desktop
- Clean, professional styling with consistent colors
- Footer with standard disclaimer text
- All emails are CC'd to chandlercoven@gmail.com

## Running Tests

There are two main test files:

1. `test-mail.js` - Tests sending a lead submission email
2. `test-appointment.js` - Tests sending an appointment request email

Run the tests individually:

```
node test-mail.js        # Test Auto Lead
node test-appointment.js # Test Appointment Request
```

## Expected Output

When tests run successfully, you should see output like:

```
🧪 STARTING EMAIL TEST 🧪
========================

🚗 Testing Auto Lead Email...
Sending test email to: quotes@theiepipeline.com
Message sent: <abc123@mail.example.com>
✅ SUCCESS: Auto Lead email sent! Message ID: <abc123@mail.example.com>

========================
🏁 TEST COMPLETED 🏁
```

For appointment requests:

```
🧪 STARTING EMAIL TEST 🧪
========================

📝 Testing Appointment Request Email...
Sending test email to: appointment@theiepipeline.com
Message sent: <def456@mail.example.com>
✅ SUCCESS: Appointment Request email sent! Message ID: <def456@mail.example.com>

========================
🏁 TEST COMPLETED 🏁
```

If there are errors, you'll see detailed error messages that can help you troubleshoot.

## Checking Results

After running the tests:

1. Check the recipient email inbox (quotes@theiepipeline.com or appointment@theiepipeline.com)
2. Check the CC recipient inbox (chandlercoven@gmail.com)
3. Verify that the emails have the correct IE Pipeline branding
4. Confirm all data is displayed properly in the organized sections
5. Test viewing the emails on different devices to ensure responsive design

## Security Notice

Do not commit the `.env` file to version control. It contains sensitive information. 