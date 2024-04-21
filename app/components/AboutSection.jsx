"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import aboutImage from "/public/images/about-image.jpeg";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <ul className="pl-2 list-disc">
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>Angular.js 13+</li>
          <li>Alpine.js</li>
        </ul>
        <ul className="pl-2 list-disc">
          <li>Node.js</li>
          <li>Express</li>
          <li>REST Api</li>
          <li>MongoDB</li>
          <li>Firebase</li>
          <li>PHP</li>
          <li>Laravel Livewire</li>
          <li>Laravel</li>
          <li>MySQL</li>
        </ul>
        <ul className="pl-2 list-disc">
          <li>OOP</li>
          <li>Git</li>
          <li>Adaptability</li>
          <li>Problem-solving</li>
          <li>Teamwork</li>
          <li>Communication</li>
          <li>Attention to Detail</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li>University of Rizal System | 2018 - 2022</li>
        <li>AMA Computer Learning Center | 2016 - 2018</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="pl-2 list-disc">
        <li>Laravel PHP Framework Course</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section>
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:py-16">
        <Image src={aboutImage} width={500} height={500} alt="about-image" />
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-gray-700 dark:text-white" id="about">About Me</h2>
          <p className="text-base text-gray-700 lg:text-lg dark:text-white">
            I am a fullstack web developer with a passion for creating
            innovative and user-friendly web applications. I have experience
            working with various programming languages and frameworks, and have
            a strong understanding of the latest trends and technologies. I am
            always eager to learn and grow as a developer.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 text-gray-700 dark:text-white">
            {isPending ? (
              <p>Loading...</p>
            ) : (
              TAB_DATA.find((data) => data.id === tab).content
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
