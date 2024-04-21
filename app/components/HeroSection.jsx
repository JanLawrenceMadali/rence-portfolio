"use client";
import Image from "next/image";
import React from "react";
import gradPic from '/public/images/grad-pic.png';
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="col-span-12 text-center sm:col-span-7 place-self-center sm:text-left">
          <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
              Hello everyone! {" "} I&apos;m {" "}
            </span>
            <br />
            <TypeAnimation className="text-gray-800 dark:text-white"
              sequence={[
                "Jan Lawrence Madali",
                1000,
                "a Web Developer",
                1000,
                "a Web App Developer",
                1000,
                "a Gamer",
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 text-base text-gray-600 sm:text-lg lg:text-xl dark:text-white">
            I&apos;m a full stack web developer based in Manila, Philippines. I&apos;m
            passionate about building scalable and maintainable web
            applications.
          </p>
          <div>
            <button className="w-full px-6 py-3 mr-4 text-white rounded-full bg-gradient-to-br from-lime-500 via-green-500 to-emerald-500 sm:w-fit hover:bg-slate-200">
              Hire me
            </button>
            <button className="w-full p-1 mt-3 mr-4 text-white rounded-full bg-gradient-to-br from-lime-500 via-green-500 to-emerald-500 sm:w-fit hover:bg-slate-900">
              <span className="block px-5 py-2 text-gray-900 rounded-full bg-white/90 hover:bg-white dark:bg-gray-950 dark:text-white dark:hover:bg-gray-900">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-12 mt-4 mb-6 sm:col-span-5 place-self-center lg:m-0">
          <div className="rounded-full bg-gradient-to-br from-lime-500 via-green-500 to-emerald-500 w-[250px] sm:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] lg:h-[400px] relative overflow-hidden">
            <Image
              src={gradPic}
              alt="grad-pic"
              width={320}
              height={320}
              loading="eager"
              priority
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
