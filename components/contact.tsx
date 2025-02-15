"use client";

import React from "react";
import { useState } from "react";
import SectionHeading from "./ui/sectionHeading";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [pending, setPending] = useState(false);
    const [success, setSuccess] = useState(false);
    // todo: implement the success message 

    async function handleSubmit(event: { preventDefault: () => void; }) {
      event.preventDefault();

        try {
          setPending(true);
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "2510f8a8-388f-4f7b-b618-f4200feff6da",
                name: name,
                email: email,
                message: message,
            }),
        });
        const result = await response.json();
        if (result.success) {
            //console.log(result);
            setSuccess(true);
        }
        } catch (error) {
          console.error("Error submitting form:", error);
        } finally {
          setPending(false);
          setEmail("");
          setMessage("");
          setName("");
        }
    };


  return (
    <section
      className=" text-center leading-8 sm:mb-2 scroll-mt-28 pb-24"
      id="contact"
    >
      <SectionHeading>Contact Me</SectionHeading>

        <p className="mb-3 text-center font-medium">
            Feel free to reach out to me directly at{" "}
            <a className="underline italic" href="mailto:marasinghamoditha51@gmail.com">marasinghamoditha51@gmail.com</a>{" "}
            or through this form.
        </p>

        <div className="flex justify-center min-w-full">
            <form className="w-full max-w-xl" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input 
                      type="text" 
                      placeholder="Name" 
                      className="w-full p-2 border border-gray-300 rounded-lg" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                </div>
                <div className="mb-3">
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full p-2 border border-gray-300 rounded-lg" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                </div>
                <div className="mb-3">
                    <textarea 
                      placeholder="Message" 
                      className="w-full p-2 border border-gray-300 rounded-lg h-32" 
                      value={message} 
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                </div>
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
                  disabled={pending}
                >
                  {pending ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                  ) : (
                    <>
                      Submit{" "}
                      <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                    </>
                    )}
                 </button>
            </form>
        </div>

    </section>
  );
}
