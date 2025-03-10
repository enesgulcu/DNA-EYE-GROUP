"use client";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  endLoadingNotification,
  startLoadingNotification,
} from "@/globalElements/toast";
import Container from "../Container";

function ContactLens() {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState("");
  const [expDate, setExpDate] = useState("");
  const [brand, setBrand] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [checkWarning, setCheckWarning] = useState(false);
  useEffect(() => {
    Aos.init();
  }, []);
 
  const submitHandler = async (e) => {
    e.preventDefault();

    // toast laoding start
    const emailMessage = `
    From Web, Contact Lens Form:
    Name: ${name},
    Expiration Date: ${expDate},
    Brand: ${brand},
    Phone Number: ${phoneNumber},
    Email: ${email},
    message: ${message}
    `;
    if (checked) {
      const notification = startLoadingNotification("Sending Message...");
      await fetch("/api/send-mail", {
        method: "POST",
        body: JSON.stringify({
          emailMessage,
          subject: "Website - Contact Lens",
        }),
      })
        .then((resp) => resp.json())
        .then((resp) => {
          if (resp.success) {
            setChecked(false);
            setName("");
            setBrand("");
            setPhoneNumber("");
            setEmail("");
            setMessage("");
            setError("");
            setExpDate("");
            endLoadingNotification(notification, "success", resp.message);
          } else {
            endLoadingNotification(
              notification,
              "error",
              "Error!: " + resp.message
            );
          }
        })
        .catch((er) => {
          endLoadingNotification(notification, "error", "Error!: " + er);
        });

      setCheckWarning(false);
    } else {
      setCheckWarning(true);
    }
  };

  return (
    <Container>
      <div className=" py-20 mb-20 bg-grayBg w-full flex justify-center items-center ">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-6 justify-center items-center w-[70%] md:w-[90%]">
          <div className="">
            <div
              data-aos="fade-right"
              className="text-black lg:text-4xl md:text-3xl text-2xl"
            >
              <span>
                Feel free to call or email us with any questions/comments you
                may have
              </span>
            </div>
            <div
              data-aos="fade-left"
              className="text-grayHead md:text-xl text-lg mt-5"
            >
              <span>
                Please don’t submit sensitive medical information, we’ll get
                that when we talk to you.
              </span>
            </div>
          </div>

          {/* FORM */}
          <div>
            <form className="max-w-md mx-auto">
              {/* Name */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.currentTarget.value);
                  }}
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-redTitle peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_first_name"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-redTitle peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
              </div>
              {/* Rx Expiration Date */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="date"
                  value={expDate}
                  onChange={(e) => {
                    setExpDate(e.currentTarget.value);
                  }}
                  name="floating_rx_expiration_date"
                  id="floating_rx_expiration_date"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-redTitle peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_rx_expiration_date"
                  className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-redTitle  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Rx Expiration Date
                </label>
              </div>
              {/* Brand Of Contact Lens */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  value={brand}
                  onChange={(e) => {
                    setBrand(e.currentTarget.value);
                  }}
                  name="floating_brand_of_contact_lens"
                  id="floating_brand_of_contact_lens"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-redTitle peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_brand_of_contact_lens"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-redTitle peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Brand Of Contact Lens
                </label>
              </div>
              {/* Phone Number */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.currentTarget.value);
                  }}
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone_number"
                  id="floating_phone_number"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-redTitle peer"
                  placeholder=""
                  required
                />
                <label
                  htmlFor="floating_phone_number"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-redTitle peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone Number (123-456-7890)
                </label>
              </div>{" "}
              {/* Email */}
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.currentTarget.value);
                  }}
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-redTitle peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-redTitle peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email Address
                </label>
              </div>
              {/* Message textarea */}
              <div className="relative z-0 w-full mb-5 group">
                <label
                  htmlFor="message"
                  className="block  mb-2 text-sm text-gray-500 "
                >
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => {
                    setMessage(e.currentTarget.value);
                  }}
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 focus:ring-redTitle focus:border-redTitle  "
                  placeholder="Enter your message..."
                ></textarea>
              </div>
              {/* CheckBox */}
              <div className="flex items-center mb-4">
                <input
                  value={checked}
                  onChange={(e) => {
                    checked == true ? setChecked(false) : setChecked(true);
                  }}
                  id="checkbox-2"
                  type="checkbox"
                  className="w-4 h-4 text-redTitle  border-gray-300 rounded focus:ring-redTitle focus:ring-2"
                />
                <label
                  htmlFor="checkbox-2"
                  className={`ms-2  font-medium  ${checkWarning && !checked
                    ? "text-red-500 text-md"
                    : "text-gray-500 text-sm"
                    }`}
                >
                  I allow this website to store my submission so they can
                  respond to my inquiry.
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  value={checked}
                  onChange={(e) => {
                    checked == true ? setChecked(false) : setChecked(true);
                  }}
                  id="checkbox-2"
                  type="checkbox"
                  className="w-4 h-4 text-redTitle  border-gray-300 rounded focus:ring-redTitle focus:ring-2"
                />
                <label
                  htmlFor="checkbox-2"
                  className={`ms-2 font-medium ${checkWarning && !checked ? "text-red-500 text-md" : "text-gray-500 text-sm"
                    }`}
                >
                  By checking this box, you consent to receive texts from DNA Eye Group relating to customer care messages and booking appointments. Standard messaging and/or data rates may apply. Message frequency varies. Text STOP to cancel. Text HELP for help.
                  <a href="/your-privacy" className="text-blue-500 underline ms-1">
                    Privacy Policy
                  </a>
                  and
                  <a href="/our-terms" className="text-blue-500 underline ms-1">
                    Terms of Use
                  </a>.
                </label>

              </div>
              <p className="text-gray-500 text-sm mt-2 mb-2">
                I consent to this website storing my submission in order to facilitate a response to my inquiry.
              </p>

              {/* Button */}
              <button
                onClick={submitHandler}
                className="text-white bg-redTitle bg-opacity-90 hover:bg-opacity-100 focus:ring-4 focus:outline-none focus:ring-redTitle font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-5 "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default ContactLens;
