import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Faculty Evaluation System for URS Binangonan Campus v2",
    description: "Capstone project",
    image: "/images/projects/urs.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JanLawrenceMadali/Faculty-Evaluation-System",
    previewUrl: "/",
    status: "in progress",
    deployed: false,
    tools: [
      "/images/tools/angular.png",
      "/images/tools/tailwindcss.png",
      "/images/tools/laravel.png",
    ],
  },
  {
    id: 2,
    title: "Kylledmed PH",
    description: "Medical Supply Store",
    image: "/images/projects/kylledmedPH.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JanLawrenceMadali/client-kylledmed-ph",
    previewUrl: "https://client-kylledmed-ph.vercel.app",
    status: "in progress",
    deployed: true,
    tools: [
      "/images/tools/angular.png",
      "/images/tools/tailwindcss.png",
      "/images/tools/laravel.png",
    ],
  },
  {
    id: 3,
    title: "E-commerce",
    description: "Coming Soon",
    image: "/images/coming-soon.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/JanLawrenceMadali/client-kylledmed-ph",
    previewUrl: "https://client-kylledmed-ph.vercel.app",
    status: "not started",
    deployed: false,
    tools: [],
  },
];

const ProjectSection = () => {
  return (
    <section>
      <h2
        id="projects"
        className="mt-4 mb-8 text-4xl font-bold text-center text-gray-700 dark:text-white md:mb-12"
      >
        My Projects
      </h2>
      <div className="grid gap-8 lg:grid-cols-3 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            status={project.status}
            deployed={project.deployed}
            tools={project.tools}
          />
        ))}{" "}
      </div>
    </section>
  );
};

export default ProjectSection;
