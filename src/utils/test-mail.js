// Test script for mail service
require('dotenv').config();
const nodemailer = require('nodemailer');

// Create mail transporter
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || 'smtp-mail.outlook.com',
  port: process.env.MAIL_PORT || 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USERNAME || '',
    pass: process.env.MAIL_PASSWORD || ''
  },
  tls: {
    ciphers: 'SSLv3'
  }
});

// Function to send email
const sendMail = async (recipient, subject, htmlContent, attachments = []) => {
  try {
    const mailOptions = {
      from: `"${process.env.MAIL_FROM_NAME || 'IE Pipeline'}" <${process.env.MAIL_FROM_ADDRESS || 'noreply@insuranceexpress.com'}>`,
      to: recipient,
      cc: 'chandlercoven@gmail.com',
      subject: subject,
      html: htmlContent,
      attachments: attachments
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
};

// Create email header with IE Pipeline branding
const createEmailHeader = (title) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; color: #333333;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f5f5f5; width: 100%;">
        <tr>
          <td align="center" style="padding: 20px 0;">
            <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); width: 600px; max-width: 100%;">
              <tr>
                <td style="background-color: #003366; padding: 20px; border-top-left-radius: 5px; border-top-right-radius: 5px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 24px;">IE Pipeline</h1>
                </td>
              </tr>
              <tr>
                <td style="padding: 20px;">
                  <h2 style="color: #003366; margin-top: 0; margin-bottom: 20px; font-size: 20px; text-align: center;">${title}</h2>
  `;
};

// Create email footer
const createEmailFooter = () => {
  return `
                </td>
              </tr>
              <tr>
                <td style="background-color: #f5f5f5; padding: 15px; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; text-align: center; font-size: 12px; color: #666666;">
                  <p style="margin: 0;">This is an automated message from IE Pipeline. Please do not reply directly to this email.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};

// Create a section for the email with a title and content
const createSection = (title, content) => {
  return `
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 20px;">
      <tr>
        <td style="background-color: #e6f0ff; padding: 10px; border-top-left-radius: 5px; border-top-right-radius: 5px;">
          <h3 style="margin: 0; color: #003366; font-size: 16px;">${title}</h3>
        </td>
      </tr>
      <tr>
        <td style="background-color: #f9f9f9; padding: 15px; border: 1px solid #e6f0ff; border-top: none; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;">
          ${content}
        </td>
      </tr>
    </table>
  `;
};

// Format field values for display
const formatField = (label, value) => {
  return `<p style="margin: 5px 0;"><strong>${label}:</strong> ${value || 'N/A'}</p>`;
};

// Test function
const testAutoLead = async () => {
  console.log('\n🚗 Testing Auto Lead Email...');
  const autoLeadData = {
    agent_name: 'John Agent',
    agency_name: 'Test Agency',
    email: 'agent@example.com',
    phone: '(555) 123-4567',
    client_name: 'Jane Client',
    client_email: 'client@example.com',
    client_phone: '(555) 987-6543',
    dob: '01/01/1980',
    occupation: 'Software Developer',
    education: 'Bachelor Degree',
    dl_number: 'DL12345678',
    address_1: '123 Main St',
    address_2: 'Apt 456',
    city: 'Miami',
    state: 'FL',
    zip: '33101',
    carrier: 'Current Insurance Co',
    premium: '$1,200/year',
    exp_date: '12/31/2023',
    vin: '1HGCM82633A123456',
    year: '2020',
    make: 'Honda',
    model: 'Accord',
    comment: 'This is a test auto lead submission from our testing script.',
  };
  
  try {
    // Start email with header
    let htmlContent = createEmailHeader('New Auto Lead Submission');
    
    // Agent Information Section
    let agentContent = '';
    agentContent += formatField('Agent Name', autoLeadData.agent_name);
    agentContent += formatField('Agency Name', autoLeadData.agency_name);
    agentContent += formatField('Email', autoLeadData.email);
    agentContent += formatField('Phone', autoLeadData.phone);
    htmlContent += createSection('Agent Information', agentContent);
    
    // Client Information Section
    let clientContent = '';
    clientContent += formatField('Client Name', autoLeadData.client_name);
    clientContent += formatField('Client Email', autoLeadData.client_email);
    clientContent += formatField('Client Phone', autoLeadData.client_phone);
    htmlContent += createSection('Client Information', clientContent);
    
    // Driver Information Section
    let driverContent = '';
    driverContent += formatField('Date of Birth', autoLeadData.dob);
    driverContent += formatField('Occupation', autoLeadData.occupation);
    driverContent += formatField('Education', autoLeadData.education);
    driverContent += formatField('Driver License Number', autoLeadData.dl_number);
    htmlContent += createSection('Driver Information', driverContent);
    
    // Vehicle Information Section
    let vehicleContent = '';
    vehicleContent += formatField('VIN', autoLeadData.vin);
    vehicleContent += formatField('Year', autoLeadData.year);
    vehicleContent += formatField('Make', autoLeadData.make);
    vehicleContent += formatField('Model', autoLeadData.model);
    htmlContent += createSection('Vehicle Information', vehicleContent);
    
    // Insurance Information Section
    let insuranceContent = '';
    insuranceContent += formatField('Current Carrier', autoLeadData.carrier);
    insuranceContent += formatField('Current Premium', autoLeadData.premium);
    insuranceContent += formatField('Expiration Date', autoLeadData.exp_date);
    htmlContent += createSection('Current Insurance Information', insuranceContent);
    
    // Address Information Section
    let addressContent = '';
    addressContent += formatField('Address Line 1', autoLeadData.address_1);
    addressContent += formatField('Address Line 2', autoLeadData.address_2);
    addressContent += formatField('City', autoLeadData.city);
    addressContent += formatField('State', autoLeadData.state);
    addressContent += formatField('ZIP Code', autoLeadData.zip);
    htmlContent += createSection('Address Information', addressContent);
    
    // Add Comments Section
    htmlContent += createSection('Additional Comments', `<p style="margin: 0;">${autoLeadData.comment || 'N/A'}</p>`);
    
    // Close the email with footer
    htmlContent += createEmailFooter();
    
    const recipient = process.env.LEAD_EMAIL || 'quotes@theiepipeline.com';
    console.log(`Sending test email to: ${recipient}`);
    
    const result = await sendMail(
      recipient,
      'New Auto Lead Submission',
      htmlContent
    );
    
    if (result.success) {
      console.log(`✅ SUCCESS: Auto Lead email sent! Message ID: ${result.messageId}`);
    } else {
      console.error(`❌ ERROR: Failed to send Auto Lead email:`, result.error);
    }
  } catch (error) {
    console.error('❌ ERROR: Exception while sending Auto Lead email:', error);
  }
};

// Run the test
console.log('🧪 STARTING EMAIL TEST 🧪');
console.log('========================');

testAutoLead()
  .then(() => {
    console.log('\n========================');
    console.log('🏁 TEST COMPLETED 🏁');
  })
  .catch(error => {
    console.error('\n❌ TEST FAILED with error:', error);
  }); 