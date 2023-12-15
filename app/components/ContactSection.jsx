"use client";

import { Button, Card, Input,  } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const emailTemplateId = "template_h6q0jco"; // Replace with your ID
const serviceId = "ADxDqX03laTXzRnzZ"; // Replace with your ID
const toEmail = "code.faisal.dev@gmail.com"; // Replace with your recipient email



export function ContactSection() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    emailjs
      .send(serviceId, emailTemplateId, formData, toEmail)
      .then((response) => {
        console.log("Email sent successfully!", response);
        // Show success message to the user
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // Show error message to the user
      });
  };

  return (
    <section id="contact" >
    <div className="grid md:grid-cols-2 border md:mt-30 py-10 md:py-36 rounded-xl text-center">
      <div className="pr-4 md:pt-60 text-2xl sm:text-4xl font-semibold leading-7 mb-10 from-blue-500 via-purple-500 to-pink-500">
        <h1>Contact me through:</h1>

        <div className="grid grid-cols-1 justify-center md:justify-left text-left">
          <div className="p-10 flex justify-center text-center">
            <Link
                href={"/"}
                className="p-2"
            >
                <div>
                    <Image src="/images/Fiver.png" alt="fiver" width={50} height={50}/>
                </div>
            </Link>

            <Link
                href={"/"}
                className="p-2"
            >
                <div>
                    <Image src="/images/upwork.png" alt="upwork" width={50} height={50}/>
                </div>
            </Link>

            <Link
                href={"/"}
                className="p-2"
            >
                <div>
                    <Image src="/images/linkedin.png" alt="linkedin" width={50} height={50}/>
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
          <form className="mt-8 mb-2 w-50 md:w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
            <div className="mb-1 flex flex-col gap-6">
              <h1 className="-mb-3">Name</h1>
              <Input
                input="text"
                placeholder="Your name"
                className="border pr-2 p-4 rounded-xl mt-2 scale-100 hover:scale-105 transition duration-300 ease-in-out"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <h1 className="-mb-3 mt-7">Email</h1>
              <Input
                type="email"
                placeholder="name@mail.com"
                className="border p-4 rounded-xl mt-2"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <h1 className="-mb-3 mt-7">Message</h1>
              <Input
                type="text"
                placeholder="I am Looking For..."
                className="border p-4 pb-10 rounded-xl mt-2 mb-2"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <div className="mt-20">
  
            <Input
            type="submit" value="Submit"
              className="border border-none px-3 inline-block py-2 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
            />
            </div>
            
          </form>
        </Card>
      </div>
    </div>
    </section>
  );
}
