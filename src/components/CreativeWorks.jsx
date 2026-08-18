import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const works = [
  {
    image: "/creative/creative-1.png",
    title: "Brand Identity & App Mockup",
  },
  {
    image: "/creative/creative-3.jpg",
    title: "Graphic Edit 01",
  },
  {
    image: "/creative/creative-4.jpg",
    title: "Graphic Edit 02",
  },
  {
    image: "/creative/creative-2.png",
    title: "Graphic Edit and Illustration 01",
  },
  {
    image: "/creative/creative-5.jpg",
    title: "Graphic Edit and Illustration 02",
  },
];

export default function CreativeWorks() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  /* =====================================================
     OPEN WORK
  ===================================================== */

  const openWork = (work) => {
    const index = works.findIndex(
      (item) => item.image === work.image
    );

    setSelectedWork(index);
  };

  /* =====================================================
     CLOSE WORK
  ===================================================== */

  const closeWork = () => {
    setSelectedWork(null);
  };

  /* =====================================================
     NEXT
  ===================================================== */

  const nextWork = () => {
    setSelectedWork((prev) => {
      if (prev === null) return null;

      return prev === works.length - 1 ? 0 : prev + 1;
    });
  };

  /* =====================================================
     PREVIOUS
  ===================================================== */

  const previousWork = () => {
    setSelectedWork((prev) => {
      if (prev === null) return null;

      return prev === 0 ? works.length - 1 : prev - 1;
    });
  };

  /* =====================================================
     KEYBOARD NAVIGATION
  ===================================================== */

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedWork === null) return;

      if (e.key === "Escape") {
        closeWork();
      }

      if (e.key === "ArrowRight") {
        nextWork();
      }

      if (e.key === "ArrowLeft") {
        previousWork();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedWork]);

  /* =====================================================
     PREVENT BACKGROUND SCROLL
  ===================================================== */

  useEffect(() => {
    if (selectedWork !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedWork]);

  return (
    <section className="w-full px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            INTRO + FOLDER
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-12
            md:flex-row
            md:items-center
          "
        >

          {/* =================================================
              LEFT — TEXT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-md
              text-center
              md:text-left
            "
          >
            <h2
              className="
                text-4xl
                tracking-tight
                md:text-5xl
              "
              style={{
                fontFamily: "Cavalhatriz",
              }}
            >
              Creative Works
            </h2>

            <p
              className="
                mt-4
                text-sm
                leading-7
                text-gray-500
                md:text-base
              "
            >
              A collection of things I've made over the years
              using Photoshop, Illustrator, Figma, and more.
            </p>
          </motion.div>


          {/* =================================================
              RIGHT — FOLDER
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              w-full
              justify-center
              md:w-auto
            "
          >

            <motion.button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={
                isOpen
                  ? "Close creative works"
                  : "Open creative works"
              }
              className="
                relative
                h-48
                w-64
                cursor-pointer
                border-0
                bg-transparent
                p-0
                focus:outline-none

                sm:h-52
                sm:w-72

                md:h-60
                md:w-80
              "
              whileHover={{
                y: -6,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* =================================================
                  FOLDER TAB
              ================================================= */}

              <motion.div
                className="
                  absolute
                  left-4
                  top-0
                  z-0
                  h-8
                  w-24
                  rounded-t-2xl
                  bg-[#e7d5c5]

                  sm:left-5
                  sm:h-10
                  sm:w-28
                "
                animate={{
                  y: isOpen ? -4 : 0,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />


              {/* =================================================
                  FOLDER BACK
              ================================================= */}

              <motion.div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  z-0
                  h-[90%]
                  rounded-3xl
                  bg-[#ead9ca]
                "
                animate={{
                  rotate: isOpen ? -3 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />


              {/* =================================================
                  CREATIVE PREVIEWS
              ================================================= */}

              <div
                className="
                  absolute
                  left-5
                  right-5
                  top-[38px]
                  z-10
                  h-[135px]
                  overflow-visible

                  sm:left-6
                  sm:right-6
                  sm:top-[42px]
                  sm:h-[150px]
                "
              >

                {works.map((work, index) => {
                  const rotations = [-10, -5, 0, 5, 10];

                  return (
                    <motion.img
                      key={work.image}
                      src={work.image}
                      alt=""
                      className="
                        absolute
                        left-1/2
                        h-24
                        w-[72px]
                        -translate-x-1/2
                        rounded-lg
                        object-cover
                        shadow-lg

                        sm:h-32
                        sm:w-24
                        sm:rounded-xl
                      "
                      style={{
                        zIndex: index + 1,
                      }}
                      initial={{
                        y: 45,
                        x: "-50%",
                        rotate: 0,
                        scale: 0.9,
                      }}
                      animate={{
                        y: isOpen
                          ? -35 -
                            Math.abs(index - 2) * 6
                          : 45,

                        x: isOpen
                          ? `calc(-50% + ${
                              (index - 2) * 38
                            }px)`
                          : "-50%",

                        rotate: isOpen
                          ? rotations[index]
                          : 0,

                        scale: isOpen ? 1 : 0.9,
                      }}
                      transition={{
                        duration: 0.55,
                        delay: index * 0.04,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  );
                })}

              </div>


              {/* =================================================
                  FOLDER FRONT
              ================================================= */}

              <motion.div
                className="
                  absolute
                  bottom-0
                  left-0
                  z-20
                  h-[78%]
                  w-full
                  overflow-hidden
                  rounded-3xl
                  bg-[#d9bda7]
                  shadow-xl

                  sm:h-[75%]

                  md:h-[72%]
                "
                animate={{
                  y: isOpen ? 12 : 0,
                  rotateX: isOpen ? 8 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  transformOrigin: "bottom",
                }}
              >

                <div
                  className="
                    flex
                    h-full
                    flex-col
                    items-center
                    justify-center
                  "
                >

                  <span
                    className="
                      text-2xl
                      text-[#49372d]
                      md:text-3xl
                    "
                    style={{
                      fontFamily: "Cavalhatriz",
                    }}
                  >
                    Creative Works
                  </span>

                  <motion.span
                    className="
                      mt-2
                      text-xs
                      text-[#725c4d]
                    "
                    animate={{
                      opacity: isOpen ? 0 : 1,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    Click to open
                  </motion.span>

                </div>

              </motion.div>

            </motion.button>

          </motion.div>

        </div>


        {/* =====================================================
            EXPANDED GALLERY
        ===================================================== */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                y: 0,
              }}
              exit={{
                opacity: 0,
                height: 0,
                y: -20,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden"
            >

              <div className="mt-16">

                <div
                  className="
                    grid
                    grid-cols-2
                    gap-4
                    md:grid-cols-5
                  "
                >

                  {works.map((work, index) => (
                    <motion.button
                      key={work.title}
                      type="button"
                      onClick={() => openWork(work)}
                      initial={{
                        opacity: 0,
                        y: 25,
                        scale: 0.95,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: 15,
                        scale: 0.95,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{
                        y: -6,
                      }}
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-2xl
                        text-left
                        focus:outline-none
                      "
                    >

                      <motion.img
                        src={work.image}
                        alt={work.title}
                        className="
                          aspect-square
                          w-full
                          object-cover
                        "
                        whileHover={{
                          scale: 1.05,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />


                      {/* TITLE */}

                      <div
                        className="
                          absolute
                          inset-x-0
                          bottom-0
                          bg-gradient-to-t
                          from-black/60
                          to-transparent
                          p-4
                          pt-10
                        "
                      >
                        <p
                          className="
                            text-xs
                            font-medium
                            text-white
                          "
                        >
                          {work.title}
                        </p>
                      </div>


                      {/* VIEW ICON */}

                      <div
                        className="
                          absolute
                          right-3
                          top-3
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          bg-black/40
                          text-sm
                          text-white
                          opacity-0
                          backdrop-blur-sm
                          transition-opacity
                          duration-300
                          group-hover:opacity-100
                        "
                      >
                        ↗
                      </div>

                    </motion.button>
                  ))}

                </div>

              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>


      {/* =====================================================
          FULLSCREEN IMAGE VIEWER
      ===================================================== */}

      <AnimatePresence>
        {selectedWork !== null && (
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
            onClick={closeWork}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-black/90
              p-4
              backdrop-blur-sm

              sm:p-8
            "
          >

            {/* =================================================
                CLOSE
            ================================================= */}

            <button
              type="button"
              onClick={closeWork}
              aria-label="Close image"
              className="
                absolute
                right-5
                top-5
                z-40
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
                hover:rotate-90
                hover:bg-white/20
              "
            >
              ✕
            </button>


            {/* =================================================
                PREVIOUS BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                previousWork();
              }}
              aria-label="Previous creative"
              className="
                absolute
                left-3
                top-1/2
                z-40
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


            {/* =================================================
                NEXT BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextWork();
              }}
              aria-label="Next creative"
              className="
                absolute
                right-3
                top-1/2
                z-40
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


            {/* =================================================
                IMAGE + TITLE
            ================================================= */}

            <AnimatePresence mode="wait">

              <motion.div
                key={selectedWork}
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
                  duration: 0.2,
                }}
                onClick={(e) => e.stopPropagation()}
                className="
                  relative
                  flex
                  max-h-[92vh]
                  max-w-[95vw]
                  flex-col
                  items-center
                "
              >

                {/* FULL IMAGE */}

                <img
                  src={works[selectedWork].image}
                  alt={works[selectedWork].title}
                  className="
                    max-h-[80vh]
                    max-w-[82vw]
                    rounded-2xl
                    object-contain
                    shadow-2xl

                    sm:max-h-[86vh]
                    sm:max-w-[80vw]
                  "
                />


                {/* TITLE + COUNTER */}

                <div
                  className="
                    mt-4
                    flex
                    max-w-[80vw]
                    items-center
                    gap-3
                    rounded-full
                    bg-white/10
                    px-5
                    py-2.5
                    text-center
                    text-xs
                    text-white
                    backdrop-blur-md

                    sm:text-sm
                  "
                >

                  <span>
                    {works[selectedWork].title}
                  </span>

                  <span className="text-white/40">
                    •
                  </span>

                  <span className="text-white/60">
                    {selectedWork + 1} / {works.length}
                  </span>

                </div>

              </motion.div>

            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}