import { mailOptions, transporter } from "@/lib/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const { emailMessage, subject, attachments } = JSON.parse(req.body);

      // bkz. https://stackoverflow.com/questions/21934667/how-to-attach-file-to-an-email-with-nodemailer
      //  attachment: {
      //   filename: "image.jpg",
      //   path: "./path/to/image.jpg",
      // },

      const info = await transporter.sendMail({
        ...mailOptions,
        attachments: attachments,
        subject: subject,
        text: emailMessage,
        to: process.env.RECEIVER_EMAIL,
        createTime:
          new Date().toLocaleDateString() +
          " " +
          new Date().toLocaleTimeString(),
      });

      return res.status(200).json({
        status: "success",
        success: true,
        message: "Message Sent.",
      });
    } catch (error) {
      return res
        .status(500)
        .json({ status: "error", success: false, message: error.message });
    }
  } else {
    return res.status(405).json({
      status: "error",
      success: false,
      message: "An Error Occured.",
    });
  }
};

export default handler;
