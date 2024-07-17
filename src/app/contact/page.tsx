"use client"

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
    <div className="min-h-[100vh]">
    <h1 className="my-12 text-center text-4xl font-bold max-lg:mt-12 max-lg:mb-0">Contact Us</h1>
    <div className="flex justify-around max-w-[1200px] mx-auto max-lg:flex-col">
        <div className="flex flex-col items-center w-1/2 max-lg:w-full max-lg:p-6">
        <h2 className="text-2xl pb-6">We'd love to hear from you!</h2>
        <p className="text-lg">Your feedback us important to is. Whether you have enjoyed your experience
            or ran into difficulty on our platform, please feel free to contact us
            and we will be happy to assist you. Thank you for visiting Platinum Threads!
        </p>
        <img className="w-4/5 py-6" src="/pthreads_contact.png" alt="" />
    </div>
    <div className="flex w-1/2 justify-center items-center max-lg:w-full">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col my-0 mx-auto w-3/4">
        {/*Group all relevant items into a form group div to format*/}
        <div className="flex flex-col mt-5">
          <label htmlFor="user_name">Name</label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            className="leading-8 bg-white border-[2px] border-solid border-black px-1"
            placeholder="Jane Doe"
          />
          <label htmlFor="user_email">Email</label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            className="leading-8 bg-white border-[2px] border-solid border-black px-1"
            placeholder="jane.doe96@gmail.com"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="info">
            Please provide feedback below:
          </label>
          <textarea name="info" id="info" className="bg-white border-[2px] border-black border-solid" cols={30} rows={10}></textarea>
        </div>
        <button type="submit" className="flex items-center justify-around p-3 bg-black w-40 my-6 mx-auto text-white cursor-pointer text-base max-lg:w-36">
          <span id="send">Send Email</span>
          <FontAwesomeIcon icon={faEnvelope}/>
        </button>
      </form>
    </div>
  </div>
  </div>
  )
}

export default Contact