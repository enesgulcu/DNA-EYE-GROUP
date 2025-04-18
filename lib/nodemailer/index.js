import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_APP_PASSWORD,
  },
});

export const mailOptions = {
  from: "DNA Eye Group " +"<"+ `${process.env.SENDER_EMAIL}`+">",
};
