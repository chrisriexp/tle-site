# Email Configuration

To set up the email service, you need to create a `.env` file at the root of your project with the following configuration:

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

## Setup Instructions

1. Create a `.env` file in the root of your project
2. Copy the configuration above into the file and replace with your actual credentials
3. Install dotenv to handle environment variables:
   ```
   npm install dotenv
   ```
4. Add the following to your main.js or equivalent entry file:
   ```javascript
   import 'dotenv/config';
   ```
   
This setup will configure the email service to send lead submissions and appointment requests to the respective email addresses.

## Email Templates

The email service now uses professionally designed HTML email templates with IE Pipeline branding. The templates are built with the following features:

- Table-based layout for maximum compatibility across email clients
- Responsive design that works on mobile and desktop
- IE Pipeline branding in the header and footer
- Organized sections with clear headings
- Inline CSS styling for consistent rendering

The templates are structured with these components:

1. **Header**: Contains the IE Pipeline logo and email title
2. **Content Sections**: Organized by category (Agent Info, Client Info, etc.)
3. **Footer**: Contains a standard disclaimer message

All emails are automatically CC'd to chandlercoven@gmail.com.

## Testing

Two test scripts are provided to test the email functionality:

1. `test-mail.js` - Tests sending a lead submission email
2. `test-appointment.js` - Tests sending an appointment request email

Run the tests using:
```
node src/utils/test-mail.js
node src/utils/test-appointment.js
```

## Security Notice

Do not commit the `.env` file to your repository. Add it to your `.gitignore` file to prevent sensitive credentials from being exposed. 