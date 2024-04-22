import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiCodeBracket, HiEye } from "react-icons/hi2";

const ProjectCard = ({
  title,
  imgUrl,
  gitUrl,
  status,
  deployed,
  previewUrl,
  description,
  tools,
}) => {
  return (
    <div>
      <div
        className="relative h-52 md:h-72 rounded-t-xl group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        {status != "not started" ? (
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] rounded-t-xl bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
            <Link
              href={gitUrl}
              target="_blank"
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <HiCodeBracket className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
            {deployed ? (
              <Link
                href={previewUrl}
                target="_blank"
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              >
                <HiEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
      <div className="px-4 py-6 text-white bg-white shadow-md rounded-b-xl">
        <h5 className="text-xl font-semibold text-gray-700 dark:text-gray-700">
          {title}
        </h5>
        <p className="mt-2 text-gray-500">{description}</p>
        <ul className="flex gap-2 py-2">
          {status === "completed" ? (
            <li className="px-2 py-1 text-sm text-green-700 bg-green-300 rounded">
              Completed
            </li>
          ) : status === "in progress" ? (
            <li className="px-2 py-1 text-sm text-yellow-700 bg-yellow-300 rounded">
              In Progress
            </li>
          ) : (
            <li className="px-2 py-1 text-sm text-red-700 bg-red-300 rounded">
              Not Started
            </li>
          )}
          {deployed ? (
            <li className="px-2 py-1 text-sm text-green-700 bg-green-300 rounded">
              Deployed
            </li>
          ) : (
            <li className="px-2 py-1 text-sm text-red-700 bg-red-300 rounded">
              Not Deployed
            </li>
          )}
        </ul>
        <div>
          <ul className="flex gap-2">
            {tools
              ? tools.map((tool, index) => (
                  <li key={index}>
                    <Image src={tool} height={30} width={30} alt="tools" />
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
