import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_EMAIL_PASSWORD,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log("Nodemailer bağlantı hatası:", error);
  } else {
    console.log("Nodemailer sunucusuna bağlantı başarılı", success);
  }
});

export const mailOptions = {
  from: "DNA Eye Group " +"<"+ `${process.env.SENDER_EMAIL}`+">",
};
