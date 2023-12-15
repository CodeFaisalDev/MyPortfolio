"use client";
import React from "react";
import Slider from "react-slick";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";


export function CardDefault() {

  return (
    <>
      <div className="mx-auto max-w-4xl lg:text-center mb-3 mt-24" id="projects">
        <h2 className="text-3xl sm:text-5xl font-semibold leading-7 mb-10 from-blue-500 via-purple-500 to-pink-500 text-center">
          Portfolio
        </h2>
        <p className="mt-2 text-1xl sm:text-3xl font-bold tracking-tight text-white-900 text-center">
          I have done tons of projects using React, Next.Js, Wordpress, Shopify,
          Django. Here is a glimps of my work.
        </p>
      </div>

      <div className="block md:flex justify-center">
        <div className="md:mx-5 scale-90 rounded-lg hover:scale-100 hover:rounded-none transition duration-300 ease-in-out p-3 md:p-4 border border-white-1px w-auto md:w-96">
          <Card className="mt-6">
          <CardHeader color="blue-gray" className="relative h-56">
              <Image
                src="/images/projects/2.png"
                width={500}
                height={500}
                alt="card-image"
              />
            </CardHeader>
            <CardBody className="md:my-5 text-center">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Wordpress E-Commarce
              </Typography>
              <Typography>
              Crafted a dynamic WordPress e-commerce site with seamless &quot;WooCommerce&quot; integration, delivering a user-friendly shopping experience for enhanced online retail.
              </Typography>
            </CardBody>
            <CardFooter className="mt-3 text-center">
              <Link
                href="#"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
              >
                See Project
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="md:mx-5 scale-90 rounded-lg hover:scale-100 hover:rounded-none transition duration-300 ease-in-out p-3 md:p-4 border border-white-1px w-auto md:w-96">
          <Card className="mt-6">
            <CardHeader color="blue-gray" className="relativeh h-50 md:h-56">
              <Image
                src="/images/projects/2.png"
                width={500}
                height={500}
                alt="card-image"
              />
            </CardHeader>
            <CardBody className="my-5 text-center">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                React / Next.js Dashboard
              </Typography>
              <Typography>
                Designed and developed a sleek &quot;React/Next.js&quot; dashboard, combining powerful functionality with a modern UI for efficient data visualization and management.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 text-center">
              <Link
                href="#"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
              >
                See Project
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="md:mx-5 scale-90 rounded-lg hover:scale-100 hover:rounded-none transition duration-300 ease-in-out p-3 md:p-4 border border-white-1px w-auto md:w-96">
          <Card className="mt-6">
            <CardHeader color="blue-gray" className="relative h-50 md:h-56">
              <Image
                src="/images/projects/3.png"
                width={500}
                height={500}
                alt="card-image"
              />
            </CardHeader>
            <CardBody className="my-5 text-center">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Rest API
              </Typography>
              <Typography>
              Engineered a robust &quot;RESTful API&quot; ensuring seamless communication between web applications, enabling efficient data exchange and enhancing overall system performance.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 text-center">
              <Link
                href="#"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
              >
                See Project
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="mt-10 text-center mb-20">
        <Link
          href="/"
          className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
        >
          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
            More Projects
          </span>
        </Link>
      </div>
    </>
  );
}
