"use client";

import { Button, Card, Input } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const emailTemplateId = "template_h6q0jco"; // Replace with your ID
const serviceId = "service_sr7xrer"; // Replace with your ID
const toEmail = "code.faisal.dev@gmail.com"; // Replace with your recipient email

export function ContactSection() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      message: e.target.elements.message.value,
    };

    try {
      await emailjs.send(serviceId, emailTemplateId, formData, toEmail);
      console.log("Email sent successfully!");
      // Show success message to the user

      // Reset the form
      e.target.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      // Show error message to the user
    }
  };

  return (
    <section id="contact">
      <div className="grid md:grid-cols-2 border md:mt-30 py-10 md:py-36 rounded-xl text-center">
        <div className="pr-4 md:pt-60 text-2xl sm:text-4xl font-semibold leading-7 mb-10 from-blue-500 via-purple-500 to-pink-500">
          <h1>Contact me through:</h1>

          <div className="grid grid-cols-1 justify-center md:justify-left text-left">
            <div className="p-10 flex justify-center text-center">
              <Link href={"/"} className="p-2">
                <div>
                  <Image
                    src="/images/Fiver.png"
                    alt="fiver"
                    width={50}
                    height={50}
                  />
                </div>
              </Link>

              <Link href={"/"} className="p-2">
                <div>
                  <Image
                    src="/images/upwork.png"
                    alt="upwork"
                    width={50}
                    height={50}
                  />
                </div>
              </Link>

              <Link href={"/"} className="p-2">
                <div>
                  <Image
                    src="/images/linkedin.png"
                    alt="linkedin"
                    width={50}
                    height={50}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-left justify-center pl-4 pr-4 md:pr-0">
          <Card color="transparent" shadow={false}>
            <h1 className="text-2xl sm:text-4xl text-center md:text-left font-semibold leading-7 mb-5 from-blue-500 via-purple-500 to-pink-500">
              Contact Via Email
            </h1>
            <h1 className="mt-2 text-.5xl text-center md:text-left sm:text-2xl font-bold tracking-tight text-white-900">
              Nice to meet you! Contacct me.
            </h1>
            <form
              className="mt-8 mb-2 w-50 md:w-80 max-w-screen-lg sm:w-96"
              onSubmit={handleSubmit}
            >
              <div className="mb-1 flex flex-col gap-6">
                <h1 className="-mb-3">Name</h1>
                <Input
                  input="text"
                  name="name"
                  placeholder="Your name"
                  className="border pr-2 p-4 rounded-xl mt-2 scale-100 hover:scale-105 transition duration-300 ease-in-out"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <h1 className="-mb-3 mt-7">Email</h1>
                <Input
                  type="email"
                  name="email"
                  placeholder="name@mail.com"
                  className="border pr-2 p-4 rounded-xl mt-2 scale-100 hover:scale-105 transition duration-300 ease-in-out"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <h1 className="-mb-3 mt-7">Message</h1>
                <Input
                  type="text"
                  name="message"
                  placeholder="I am Looking For..."
                  className="border pr-2 p-4 rounded-xl mt-2 scale-100 hover:scale-105 transition duration-300 ease-in-out"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />

                <Input
                  type="submit"
                  value="Submit"
                  className="border mt-10 scale-100 hover:scale-105 transition duration-300 ease-in-out border-none px-3 inline-block py-2 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white"
                />
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
