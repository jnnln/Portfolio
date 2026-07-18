import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImage(0);
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;

      if (e.key === "Escape") closeModal();

      if (e.key === "ArrowRight") nextImage();

      if (e.key === "ArrowLeft") previousImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  console.log(projects);
console.log(projects.length);

  return (
    <section
      id="my-projects"
      className="relative overflow-hidden px-8 py-28"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-[#FFF9FA] to-white" />

      <div className="mx-auto max-w-6xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <div className="group inline-block">

            <h2
              style={{ fontFamily: "Cavalhatriz" }}
              className="text-4xl text-neutral-900"
            >
              My Projects
            </h2>

            <div
              className="
                mx-auto
                mt-1
                h-[2px]
                w-0
                rounded-full
                bg-neutral-900
                transition-all
                duration-500
                group-hover:w-full
              "
            />

          </div>

          <p className="mt-3 text-sm text-neutral-400">
            ˚₊‧꒰ა ☆ ໒꒱ ‧₊˚
          </p>

        </motion.div>

        {/* Grid */}

        <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}

        </div>

      </div>

      {/* Modal */}

      <AnimatePresence>

        {selectedProject && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="
              fixed
              inset-0
              z-50

              flex
              items-center
              justify-center

              bg-black/50

              p-6
              backdrop-blur-sm
            "
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: .95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: .95,
              }}
              transition={{
                duration: .25,
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                max-h-[90vh]
                w-full
                max-w-5xl

                overflow-y-auto

                rounded-[34px]

                border
                border-white/80

                bg-white

                p-7

                shadow-2xl
              "
            >

              {/* Image */}

              <div className="relative">

                <img
                  src={selectedProject.images[currentImage]}
                  alt={selectedProject.title}
                  className="
                    h-[520px]
                    w-full

                    rounded-3xl

                    object-cover
                  "
                />

                {/* Previous */}

                {selectedProject.images.length > 1 && (

                  <button
                    onClick={previousImage}
                    className="
                      absolute
                      left-5
                      top-1/2

                      -translate-y-1/2

                      rounded-full

                      bg-white/80

                      p-3

                      shadow-lg

                      backdrop-blur
                    "
                  >
                    ←
                  </button>

                )}

                {/* Next */}

                {selectedProject.images.length > 1 && (

                  <button
                    onClick={nextImage}
                    className="
                      absolute
                      right-5
                      top-1/2

                      -translate-y-1/2

                      rounded-full

                      bg-white/80

                      p-3

                      shadow-lg

                      backdrop-blur
                    "
                  >
                    →
                  </button>

                )}

              </div>

              {/* Dots */}

              {selectedProject.images.length > 1 && (

                <div className="mt-5 flex justify-center gap-2">

                  {selectedProject.images.map((_, index) => (

                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`
                        h-2.5
                        w-2.5
                        rounded-full
                        transition-all

                        ${
                          currentImage === index
                            ? "bg-neutral-800"
                            : "bg-neutral-300"
                        }
                      `}
                    />

                  ))}

                </div>

              )}              {/* Content */}

              <div className="mt-8">

                {/* Header */}

                <div className="flex flex-wrap items-start justify-between gap-4">

                  <div>

                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
                      {selectedProject.subtitle}
                    </p>

                    <h2 className="mt-2 text-3xl font-semibold text-neutral-900">
                      {selectedProject.title}
                    </h2>

                  </div>

                  <div className="flex items-center gap-3">

                    {selectedProject.status && (
                      <span
                        className="
                          rounded-full
                          bg-pink-100
                          px-3
                          py-1
                          text-xs
                          font-medium
                          text-pink-700
                        "
                      >
                        {selectedProject.status}
                      </span>
                    )}

                    <span className="text-sm text-neutral-400">
                      {selectedProject.year}
                    </span>

                  </div>

                </div>

                {/* Divider */}

                <div className="my-8 h-px bg-neutral-200" />

                {/* Overview */}

                <div>

                  <h3 className="text-lg font-semibold text-neutral-900">
                    Overview
                  </h3>

                  <p className="mt-3 leading-7 text-neutral-600">
                    {selectedProject.overview}
                  </p>

                </div>

                {/* Two Columns */}

                <div className="mt-10 grid gap-8 md:grid-cols-2">

                  {/* Contributions */}

                  <div>

                    <h3 className="text-lg font-semibold text-neutral-900">
                      My Contributions
                    </h3>

                    <div className="mt-4 space-y-3">

                      {selectedProject.contributions.map((item) => (

                        <div
                          key={item}
                          className="flex items-start gap-3"
                        >

                          <span className="mt-1 text-pink-500">
                            ✦
                          </span>

                          <p className="text-neutral-600">
                            {item}
                          </p>

                        </div>

                      ))}

                    </div>

                  </div>

                  {/* Features */}

                  <div>

                    <h3 className="text-lg font-semibold text-neutral-900">
                      Key Features
                    </h3>

                    <div className="mt-4 space-y-3">

                      {selectedProject.features.map((item) => (

                        <div
                          key={item}
                          className="flex items-start gap-3"
                        >

                          <span className="mt-1 text-pink-500">
                            ✓
                          </span>

                          <p className="text-neutral-600">
                            {item}
                          </p>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>

                {/* Technologies */}

                <div className="mt-10">

                  <h3 className="text-lg font-semibold text-neutral-900">
                    Technologies
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-3">

                    {selectedProject.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="
                          rounded-full
                          border
                          border-neutral-200
                          bg-neutral-100
                          px-4
                          py-2
                          text-sm
                          text-neutral-700
                        "
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

              {/* Close */}

              <button
                onClick={closeModal}
                className="
                  absolute
                  right-6
                  top-6

                  flex
                  h-10
                  w-10
                  items-center
                  justify-center

                  rounded-full

                  bg-white/90

                  shadow-lg

                  transition

                  hover:scale-105
                "
              >
                ✕
              </button>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}