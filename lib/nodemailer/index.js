import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dnaclsales@gmail.com",
    pass: "ybcu ilqc djtw paru",
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
