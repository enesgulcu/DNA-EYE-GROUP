import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { subject, name, phoneNumber, email, message, expDate, brand } = req.body;

    const response = await resend.emails.send({
      from: `Contact Form <${process.env.RESEND_FROM_EMAIL}>`,
      to: [process.env.RECEIVER_EMAIL],
      subject,
      reply_to: email,
      react: EmailTemplate({
        name,
        phoneNumber,
        email,
        message,
        expDate,
        brand
      }),
    });

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
