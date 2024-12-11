import { mailOptions, transporter } from "@/lib/nodemailer";
import mailStringCheck from "@/util/mailStringCheck";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const email = "firatkil.gerekli@gmail.com";
      const { emailMessage, subject } = req.body;

      if (
        !email ||
        !mailStringCheck(email) ||
        email == "" ||
        email == null ||
        email == undefined
      ) {
        throw new Error("Lütfen girdiğiniz email adresini kontrol ediniz.");
      }

      const info = await transporter.sendMail({
        ...mailOptions,
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
