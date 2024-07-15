"use client"

import React, { useRef } from "react";
import "@/Styles/Contact.css"
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);

    //define where emails will be sent using emailjs
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      if (form.current) {
        emailjs
          .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY")
          .then(
            () => {
              console.log("SUCCESS");
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
      }
    };
  
    return (
    <div className="contact">
    <h1 className="contact-title">Contact Us</h1>
    <div className="contact-container">
        <div className="contact-info">
        <h2>We'd love to hear from you!</h2>
        <p className="contact-msg">Your feedback us important to is. Whether you have enjoyed your experience
            or ran into difficulty on our platform, please feel free to contact us
            and we will be happy to assist you. Thank you for visiting Platinum Threads!
        </p>
        <img className="contact-logo" src="/pthreads_contact.png" alt="" />
    </div>
    <div className="form">
      <form ref={form} onSubmit={sendEmail} className="email-form">
        {/*Group all relevant items into a form group div to format*/}
        <div className="form-group">
          <label htmlFor="user_name">Name</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            placeholder="Jane Doe"
          />
          <label htmlFor="user_email">Email</label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            placeholder="jane.doe96@gmail.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="info">
            Please provide feedback below:
          </label>
          <textarea name="info" id="info" cols={30} rows={10}></textarea>
        </div>
        <button type="submit" className="email-btn">
          <span id="send">Send Email</span>
          <i className="fa-solid fa-envelope"></i>
        </button>
      </form>
    </div>
  </div>
  </div>
  )
}

export default Contact