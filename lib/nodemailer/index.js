import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_EMAIL_PASSWORD,
  },
  pool: true,
  maxConnections: 1,
  maxMessages: 100,
  rateDelta: 1000,
  rateLimit: 5,
  connectionTimeout: 10000,
  greetingTimeout: 5000,
  socketTimeout: 10000,
});

transporter.verify(function (error, success) {
  if (error) {
    console.log("Nodemailer bağlantı hatası:", error);
  } else {
    console.log("Nodemailer sunucusuna bağlantı başarılı");
  }
});

export const mailOptions = {
  from: "DNA Eye Group " +"<"+ `${process.env.SENDER_EMAIL}`+">",
};
