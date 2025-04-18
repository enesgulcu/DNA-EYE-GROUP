import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", // Replace with your SMTP host
  port: 465, // Common ports: 587 (TLS), 465 (SSL), or 25
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SENDER_EMAIL, // Replace with your SMTP username
    pass: process.env.SENDER_EMAIL_PASSWORD, // Replace with your SMTP password
  },
});

export const mailOptions = {
  from: "DNA Eye Group " +"<"+ `${process.env.SENDER_EMAIL}`+">",
};
