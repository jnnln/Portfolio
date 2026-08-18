import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [showFullscreen, setShowFullscreen] = useState(false);

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImage(0);
    setShowFullscreen(false);
  };

  const nextImage = () => {
    if (!selectedProject) return;

    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    if (!selectedProject) return;

    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const openFullscreen = () => {
    setShowFullscreen(true);
  };

  const closeFullscreen = () => {
    setShowFullscreen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;

      if (e.key === "Escape") {
        if (showFullscreen) {
          closeFullscreen();
        } else {
          closeModal();
        }
      }

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, showFullscreen]);

  useEffect(() => {
    if (showFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showFullscreen]);

  return (
    <section
      id="my-projects"
      className="
        relative
        overflow-hidden
        px-5
        py-24
        sm:px-6
        sm:py-28
        lg:px-8
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          -z-20
          bg-gradient-to-b
          from-white
          via-[#FFF9FA]
          to-white
        "
      />

      <div
        className="
          absolute
          -left-40
          top-20
          -z-10
          h-[25rem]
          w-[25rem]
          rounded-full
          bg-neutral-200/30
          blur-[160px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-[-10rem]
          -z-10
          h-[25rem]
          w-[25rem]
          rounded-full
          bg-pink-200/20
          blur-[160px]
        "
      />

      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <div className="group inline-block">

            <h2
              style={{ fontFamily: "Cavalhatriz" }}
              className="
                text-3xl
                text-neutral-900
                sm:text-4xl
                lg:text-5xl
              "
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


        {/* =====================================================
            PROJECT GRID
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-14
            grid
            gap-7
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={(project) => {
                setSelectedProject(project);
                setCurrentImage(0);
                setShowFullscreen(false);
              }}
            />
          ))}
        </motion.div>

      </div>


      {/* =====================================================
          PROJECT MODAL
      ===================================================== */}

      <AnimatePresence>
        {selectedProject && !showFullscreen && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={closeModal}
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-black/40
              p-4
              backdrop-blur-sm
              sm:p-6
            "
          >

            {/* =================================================
                MODAL OUTER WRAPPER
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.98,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                relative
                max-h-[90vh]
                w-full
                max-w-5xl
                overflow-hidden
                rounded-[32px]
                border
                border-white/80
                bg-white
                shadow-2xl
              "
            >

              {/* =================================================
                  SCROLLING CONTENT
              ================================================= */}

              <div
                className="
                  custom-scrollbar
                  max-h-[90vh]
                  overflow-y-auto
                  p-5
                  sm:p-7
                "
              >

                {/* =================================================
                    CLOSE BUTTON
                ================================================= */}

                <button
                  onClick={closeModal}
                  aria-label="Close project"
                  className="
                    absolute
                    right-5
                    top-5
                    z-30
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-white/90
                    text-neutral-700
                    shadow-md
                    transition-all
                    duration-300
                    hover:bg-neutral-100
                    hover:rotate-90
                  "
                >
                  ✕
                </button>


                {/* =================================================
                    IMAGE + NAVIGATION
                ================================================= */}

                <div className="relative">

                  <button
                    type="button"
                    onClick={openFullscreen}
                    aria-label="View image fullscreen"
                    className="
                      group
                      relative
                      block
                      w-full
                      cursor-zoom-in
                      overflow-hidden
                      rounded-3xl
                      text-left
                    "
                  >

                    <img
                      src={selectedProject.images[currentImage]}
                      alt={selectedProject.title}
                      className="
                        block
                        h-auto
                        max-h-[65vh]
                        w-full
                        rounded-3xl
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-[1.01]
                      "
                    />

                    <div
                      className="
                        pointer-events-none
                        absolute
                        bottom-4
                        right-4
                        rounded-full
                        bg-black/55
                        px-3
                        py-1.5
                        text-xs
                        text-white
                        opacity-0
                        backdrop-blur-md
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    >
                      Click to view fullscreen
                    </div>

                  </button>


                  {/* =================================================
                      IMAGE NAVIGATION
                  ================================================= */}

                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={previousImage}
                        aria-label="Previous image"
                        className="
                          absolute
                          left-4
                          top-1/2
                          z-20
                          flex
                          h-10
                          w-10
                          -translate-y-1/2
                          items-center
                          justify-center
                          rounded-full
                          bg-white/90
                          text-neutral-800
                          shadow-md
                          backdrop-blur
                          transition-all
                          duration-300
                          hover:scale-105
                          hover:bg-white
                          sm:left-5
                        "
                      >
                        ←
                      </button>

                      <button
                        type="button"
                        onClick={nextImage}
                        aria-label="Next image"
                        className="
                          absolute
                          right-4
                          top-1/2
                          z-20
                          flex
                          h-10
                          w-10
                          -translate-y-1/2
                          items-center
                          justify-center
                          rounded-full
                          bg-white/90
                          text-neutral-800
                          shadow-md
                          backdrop-blur
                          transition-all
                          duration-300
                          hover:scale-105
                          hover:bg-white
                          sm:right-5
                        "
                      >
                        →
                      </button>
                    </>
                  )}

                </div>


                {/* =================================================
                    IMAGE DOTS
                ================================================= */}

                {selectedProject.images.length > 1 && (

                  <div className="mt-5 flex justify-center gap-2">

                    {selectedProject.images.map((_, index) => (

                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        aria-label={`View image ${index + 1}`}
                        className={`
                          h-2
                          w-2
                          rounded-full
                          transition-all
                          duration-300
                          ${
                            currentImage === index
                              ? "scale-125 bg-neutral-800"
                              : "bg-neutral-300 hover:bg-neutral-400"
                          }
                        `}
                      />

                    ))}

                  </div>

                )}


                {/* =================================================
                    PROJECT HEADER
                ================================================= */}

                <div className="mt-8">

                  <div
                    className="
                      flex
                      flex-wrap
                      items-start
                      justify-between
                      gap-4
                    "
                  >

                    <div>

                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-[0.2em]
                          text-neutral-400
                        "
                      >
                        {selectedProject.subtitle}
                      </p>

                      <h2
                        className="
                          mt-2
                          text-2xl
                          font-semibold
                          text-neutral-900
                          sm:text-3xl
                        "
                      >
                        {selectedProject.title}
                      </h2>

                    </div>


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

                  </div>


                  {/* =================================================
                      LINKS
                  ================================================= */}

                  {selectedProject.links && (

                    <div className="mt-5 flex flex-wrap gap-2">

                      {selectedProject.links.website && (

                        <a
                          href={selectedProject.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-neutral-200
                            bg-white
                            px-4
                            py-2
                            text-xs
                            font-medium
                            text-neutral-700
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:border-neutral-400
                            hover:text-neutral-900
                          "
                        >
                          Website
                          <span>↗</span>
                        </a>

                      )}

                      {selectedProject.links.kiosk && (

                        <a
                          href={selectedProject.links.kiosk}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-neutral-200
                            bg-white
                            px-4
                            py-2
                            text-xs
                            font-medium
                            text-neutral-700
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:border-neutral-400
                            hover:text-neutral-900
                          "
                        >
                          Kiosk
                          <span>↗</span>
                        </a>

                      )}

                      {selectedProject.links.github && (

                        <a
                          href={selectedProject.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-neutral-200
                            bg-white
                            px-4
                            py-2
                            text-xs
                            font-medium
                            text-neutral-700
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:border-neutral-400
                            hover:text-neutral-900
                          "
                        >
                          GitHub
                          <span>↗</span>
                        </a>

                      )}

                    </div>

                  )}

                </div>


                {/* =================================================
                    DIVIDER
                ================================================= */}

                <div className="my-8 h-px bg-neutral-200" />


                {/* =================================================
                    OVERVIEW
                ================================================= */}

                <div>

                  <h3 className="text-lg font-semibold text-neutral-900">
                    Overview
                  </h3>

                  <p className="mt-3 leading-7 text-neutral-600">
                    {selectedProject.overview}
                  </p>

                </div>


                {/* =================================================
                    CONTRIBUTIONS + FEATURES
                ================================================= */}

                <div className="mt-10 grid gap-5 md:grid-cols-2">

                  {/* =================================================
                      CONTRIBUTIONS CARD
                  ================================================= */}

                  <div
                    className="
                      rounded-3xl
                      border
                      border-pink-100
                      bg-pink-50/40
                      p-5
                      sm:p-6
                    "
                  >

                    <h3 className="text-lg font-semibold text-neutral-900">
                      My Contributions
                    </h3>

                    <div className="mt-5 space-y-3">

                      {selectedProject.contributions.map((item) => (

                        <div
                          key={item}
                          className="flex items-start gap-3"
                        >

                          <span
                            className="
                              mt-1
                              shrink-0
                              text-sm
                              text-pink-300
                            "
                          >
                            ★
                          </span>

                          <p className="text-sm leading-6 text-neutral-600">
                            {item}
                          </p>

                        </div>

                      ))}

                    </div>

                  </div>


                  {/* =================================================
                      FEATURES CARD
                  ================================================= */}

                  <div
                    className="
                      rounded-3xl
                      border
                      border-pink-100
                      bg-pink-50/40
                      p-5
                      sm:p-6
                    "
                  >

                    <h3 className="text-lg font-semibold text-neutral-900">
                      Key Features
                    </h3>

                    <div className="mt-5 space-y-3">

                      {selectedProject.features.map((item) => (

                        <div
                          key={item}
                          className="flex items-start gap-3"
                        >

                          <span
                            className="
                              mt-1
                              shrink-0
                              text-sm
                              text-pink-300
                            "
                          >
                            ★
                          </span>

                          <p className="text-sm leading-6 text-neutral-600">
                            {item}
                          </p>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>


                {/* =================================================
                    TECHNOLOGIES
                ================================================= */}

                <div className="mt-10">

                  <h3 className="text-lg font-semibold text-neutral-900">
                    Technologies
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">

                    {selectedProject.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="
                          rounded-full
                          border
                          border-neutral-200
                          bg-neutral-100
                          px-3
                          py-1.5
                          text-xs
                          font-medium
                          text-neutral-600
                          transition-all
                          duration-300
                          hover:border-neutral-300
                          hover:bg-neutral-200
                        "
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}
      </AnimatePresence>


      {/* =====================================================
          FULLSCREEN IMAGE VIEWER
      ===================================================== */}

      <AnimatePresence>
        {showFullscreen && selectedProject && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            onClick={closeFullscreen}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/90
              p-4
              sm:p-8
            "
          >

            {/* CLOSE */}

            <button
              onClick={closeFullscreen}
              aria-label="Close fullscreen image"
              className="
                absolute
                right-5
                top-5
                z-30
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-xl
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white/20
                hover:rotate-90
              "
            >
              ✕
            </button>


            {/* IMAGE */}

            <motion.img
              initial={{
                opacity: 0,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.97,
              }}
              transition={{
                duration: 0.25,
              }}
              src={selectedProject.images[currentImage]}
              alt={selectedProject.title}
              onClick={(e) => e.stopPropagation()}
              className="
                max-h-[90vh]
                max-w-[92vw]
                rounded-2xl
                object-contain
                shadow-2xl
                sm:max-h-[88vh]
                sm:max-w-[88vw]
              "
            />


            {/* PREVIOUS */}

            {selectedProject.images.length > 1 && (

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  previousImage();
                }}
                aria-label="Previous image"
                className="
                  absolute
                  left-3
                  top-1/2
                  z-20
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-xl
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-white/20
                  sm:left-6
                  sm:h-12
                  sm:w-12
                "
              >
                ←
              </button>

            )}


            {/* NEXT */}

            {selectedProject.images.length > 1 && (

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                aria-label="Next image"
                className="
                  absolute
                  right-3
                  top-1/2
                  z-20
                  flex
                  h-11
                  w-11
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-xl
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-white/20
                  sm:right-6
                  sm:h-12
                  sm:w-12
                "
              >
                →
              </button>

            )}


            {/* COUNTER */}

            {selectedProject.images.length > 1 && (

              <div
                className="
                  absolute
                  bottom-5
                  left-1/2
                  -translate-x-1/2
                  rounded-full
                  bg-white/10
                  px-4
                  py-2
                  text-xs
                  text-white
                  backdrop-blur-md
                "
              >
                {currentImage + 1} / {selectedProject.images.length}
              </div>

            )}

          </motion.div>

        )}
      </AnimatePresence>

    </section>
  );
}