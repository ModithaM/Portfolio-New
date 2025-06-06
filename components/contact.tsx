"use client";

import React from "react";
import { useState } from "react";
import SectionHeading from "./ui/sectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import submitForm from "../services/submitForm"; 

export default function Contact() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [pending, setPending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    async function handleSubmit(event: { preventDefault: () => void; }) {
      event.preventDefault();

      try {
        setPending(true);
        const result = await submitForm(name, email, message);
        if (result.success) {
            setSuccess(true);
        }
        if (result.error) {
            setError(true);
        }
      } catch (error) {
          console.error("Error submitting form:", error);
          setError(true);
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
            <form className="w-full max-w-xl dark:text-black" onSubmit={handleSubmit}>
                {success && (
                    <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                      <span className="font-medium"></span> Your message has been sent successfully.
                    </div>
                )}
                {error && (
                    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                      <span className="font-medium"></span> There was an error sending your message. Please try again.
                    </div>
                )}
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
