import { transporter } from "@/lib/nodemailer";

export default async function POST(req, res) {
  try {
    const { subject, name, phoneNumber, email, message, expDate, brand } = req.body;

    const response = await transporter.sendMail({
      from: `Contact Form <${process.env.SENDER_EMAIL}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: subject,
      html: `
      <p>From Web, Contact Form:</p>
      <p>Name: ${name},</p>
      ${expDate ? `<p>Expiration Date: ${expDate}</p>` : ""}
      ${brand ? `<p>Brand: ${brand},</p>` : ""}
      <p>Phone Number: ${phoneNumber},</p>
      <p>Email: ${email},</p>
      <p>Message: ${message}</p>
      `
    });
    console.log(response);

    if (response.error) {
      console.error("Resend error:", response.error);
      return res.status(400).json({ error: response.error });
    }

    const data = response.data;

    console.log("Email sent:", data);
    return res.status(200).json({ success: true, data });

  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
