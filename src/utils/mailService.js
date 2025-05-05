// Mail service utility for sending emails via SMTP
const nodemailer = require('nodemailer');

// Create reusable transporter object using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || 'smtp-mail.outlook.com',
  port: process.env.MAIL_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAIL_USERNAME || 'noreply@insuranceexpress.com',
    pass: process.env.MAIL_PASSWORD || ''
  },
  tls: {
    ciphers: 'SSLv3'
  }
});

// Mail sender function
const sendMail = async (recipient, subject, htmlContent, attachments = []) => {
  try {
    // Define mail options
    const mailOptions = {
      from: `"${process.env.MAIL_FROM_NAME || 'IE Pipeline'}" <${process.env.MAIL_FROM_ADDRESS || 'noreply@insuranceexpress.com'}>`,
      to: recipient,
      cc: 'chandlercoven@gmail.com',
      subject: subject,
      html: htmlContent,
      attachments: attachments
    };

    // Send mail with defined transport object
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

// Specific email sender for leads
const sendLeadEmail = async (leadData, leadType) => {
  const recipient = process.env.LEAD_EMAIL || 'quotes@theiepipeline.com';
  const subject = `New ${leadType} Lead Submission`;
  
  // Start email with header
  let htmlContent = createEmailHeader(`New ${leadType} Lead Submission`);
  
  // Agent Information Section
  let agentContent = '';
  agentContent += formatField('Agent Name', leadData.agent_name);
  agentContent += formatField('Agency Name', leadData.agency_name);
  agentContent += formatField('Email', leadData.email);
  agentContent += formatField('Phone', leadData.phone);
  htmlContent += createSection('Agent Information', agentContent);
  
  // Client Information Section
  let clientContent = '';
  clientContent += formatField('Client Name', leadData.client_name);
  clientContent += formatField('Client Email', leadData.client_email);
  clientContent += formatField('Client Phone', leadData.client_phone);
  htmlContent += createSection('Client Information', clientContent);
  
  // Lead Type Specific Sections
  if (leadType === 'Auto') {
    // Driver Information Section
    let driverContent = '';
    driverContent += formatField('Date of Birth', leadData.dob);
    driverContent += formatField('Occupation', leadData.occupation);
    driverContent += formatField('Education', leadData.education);
    driverContent += formatField('Driver License Number', leadData.dl_number);
    htmlContent += createSection('Driver Information', driverContent);
    
    // Vehicle Information Section
    let vehicleContent = '';
    vehicleContent += formatField('VIN', leadData.vin);
    vehicleContent += formatField('Year', leadData.year);
    vehicleContent += formatField('Make', leadData.make);
    vehicleContent += formatField('Model', leadData.model);
    htmlContent += createSection('Vehicle Information', vehicleContent);
  } else if (leadType === 'Home') {
    // Property Information Section
    let propertyContent = '';
    propertyContent += formatField('Occupancy', leadData.occupancy);
    propertyContent += formatField('Currently Insured', typeof leadData.insured === 'boolean' ? (leadData.insured ? 'Yes' : 'No') : 'N/A');
    propertyContent += formatField('New Purchase', typeof leadData.new_purchase === 'boolean' ? (leadData.new_purchase ? 'Yes' : 'No') : 'N/A');
    htmlContent += createSection('Property Information', propertyContent);
  } else if (leadType === 'Additional Product') {
    // Product Information Section
    let productContent = '';
    productContent += formatField('Product', leadData.product);
    htmlContent += createSection('Product Information', productContent);
  }
  
  // Add Insurance Information if present
  if (leadData.carrier || leadData.premium || leadData.exp_date) {
    let insuranceContent = '';
    insuranceContent += formatField('Current Carrier', leadData.carrier);
    insuranceContent += formatField('Current Premium', leadData.premium);
    insuranceContent += formatField('Expiration Date', leadData.exp_date);
    htmlContent += createSection('Current Insurance Information', insuranceContent);
  }
  
  // Address Information Section
  let addressContent = '';
  addressContent += formatField('Address Line 1', leadData.address_1);
  addressContent += formatField('Address Line 2', leadData.address_2);
  addressContent += formatField('City', leadData.city);
  addressContent += formatField('State', leadData.state);
  addressContent += formatField('ZIP Code', leadData.zip);
  htmlContent += createSection('Address Information', addressContent);
  
  // Add Comments Section if present
  if (leadData.comment) {
    htmlContent += createSection('Additional Comments', `<p style="margin: 0;">${leadData.comment}</p>`);
  }
  
  // Close the email with footer
  htmlContent += createEmailFooter();
  
  // Prepare attachments if any
  const attachments = [];
  if (leadData.upload1) {
    attachments.push({
      filename: 'attachment1.pdf',
      content: leadData.upload1,
      encoding: 'base64'
    });
  }
  
  if (leadData.upload2) {
    attachments.push({
      filename: 'attachment2.pdf',
      content: leadData.upload2,
      encoding: 'base64'
    });
  }
  
  return sendMail(recipient, subject, htmlContent, attachments);
};

// Specific email sender for appointment requests
const sendAppointmentEmail = async (appointmentData) => {
  const recipient = process.env.APPOINTMENT_EMAIL || 'appointment@theiepipeline.com';
  const subject = 'New Appointment Request';
  
  // Start email with header
  let htmlContent = createEmailHeader('New Appointment Request');
  
  // Appointment Information Section
  let appointmentContent = '';
  appointmentContent += formatField('Name', `${appointmentData.firstName} ${appointmentData.lastName}`);
  appointmentContent += formatField('Email', appointmentData.email);
  appointmentContent += formatField('Phone', appointmentData.phone);
  appointmentContent += formatField('Agency', appointmentData.agency);
  htmlContent += createSection('Appointment Information', appointmentContent);
  
  // Add Comments Section if present
  if (appointmentData.comment) {
    htmlContent += createSection('Additional Information', `<p style="margin: 0;">${appointmentData.comment}</p>`);
  }
  
  // Close the email with footer
  htmlContent += createEmailFooter();
  
  return sendMail(recipient, subject, htmlContent);
};

export default {
  sendMail,
  sendLeadEmail,
  sendAppointmentEmail
}; 