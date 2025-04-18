import { transporter } from "@/lib/nodemailer";

export default async function handler(req, res) {
  // Sadece POST isteklerini kabul et
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { subject, name, phoneNumber, email, message, expDate, brand, emailMessage, attachments } = req.body;
    
    // Gerekli alanları kontrol et
    if (!email || !name) {
      return res.status(400).json({ success: false, message: 'Email and name are required' });
    }

    // E-posta gönderme işlemi
    const mailData = {
      from: `Contact Form <${process.env.SENDER_EMAIL || "dnaclsales@gmail.com"}>`,
      to: process.env.RECEIVER_EMAIL || "dnaclsales@gmail.com",
      subject: `Website - ${subject || 'Contact Form'}`,
      html: emailMessage || `
      <p>From Web, ${subject || 'Contact Form'}:</p>
      <p>Name: ${name},</p>
      ${expDate ? `<p>Expiration Date: ${expDate}</p>` : ""}
      ${brand ? `<p>Brand: ${brand},</p>` : ""}
      <p>Phone Number: ${phoneNumber || 'Not provided'},</p>
      <p>Email: ${email},</p>
      <p>Message: ${message || 'No message provided'}</p>
      `
    };

    // Eğer ekler varsa ekle
    if (attachments && attachments.length > 0) {
      mailData.attachments = attachments;
    }

    // E-posta gönderme işlemi
    const info = await transporter.sendMail(mailData);
    
    console.log("Email sent successfully:", info.messageId);
    
    return res.status(200).json({ 
      success: true, 
      message: "Email sent successfully",
      messageId: info.messageId
    });

  } catch (error) {
    console.error("Email send error:", error);
    
    // Hata detaylarını logla
    if (error.code) {
      console.error("Error code:", error.code);
    }
    if (error.command) {
      console.error("Failed command:", error.command);
    }
    
    return res.status(500).json({ 
      success: false, 
      message: "Failed to send email", 
      error: error.message 
    });
  }
}
