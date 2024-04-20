"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "GiftGuru",
    description: "By simply uploading photos of items your loved one enjoys, our AI technology analyzes their style and preferences to suggest the perfect, stress-free gift.",
    image: "/assets/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CztCFfSNI/GiftGuru-zitao",
    previewUrl: "giftguru-f7599.web.app",
  },
  {
    id: 2,
    title: "Voyage",
    description: "A personalized travel web app that recommends places based on preferences, enhancing journeys with organized and unforgettable experiences.",
    image: "/assets/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CztCFfSNI/Voyage-zitao",
    previewUrl: "https://voyage-f348c.web.app/home",
  },
  {
    id: 3,
    title: "Peer Evaluation",
    description: "A open source web design with Ruby on Rails for teachers and students to ensure quality collaborative work among peers.",
    image: "/assets/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CztCFfSNI/Voyage-zitao",
    previewUrl: "https://voyage-f348c.web.app/home",
  },
  {
    id: 4,
    title: "Fitness Calendar",
    description: "Designed to inspire and motivate users to achieve their fitness goals through our personalized training plans, progress tracking, and reminder functions.",
    image: "/assets/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/CztCFfSNI/FitnessCalendar",
    previewUrl: "https://github.com/CztCFfSNI/FitnessCalendar",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;