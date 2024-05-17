"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import GithubIcon from "/public/github-icon.svg";
import LinkedinIcon from "/public/linkedin-icon.svg";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid items-center grid-cols-1 gap-4 py-24 my-12 md:grid-cols-2"
    >
      <div>
        <h5 className="my-2 text-xl font-bold text-white">
          Let&apos;s Connect!
        </h5>
        <p className="max-w-md mb-4 text-gray-50">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="flex flex-row gap-2 socials">
          <Link href="https://github.com/JanLawrenceMadali" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jan-lawrence-madali"
            target="_blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        {/* <button className="w-full px-5 py-4 font-medium text-white bg-green-500 rounded-lg hover:bg-green-600"> */}
        <a
          className="block w-full px-5 py-4 font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-600"
          href="mailto:jan.lawrence.madali@gmail.com"
        >
          Send me a message!😁
        </a>
        {/* </button> */}
      </div>
    </section>
  );
};

export default EmailSection;
