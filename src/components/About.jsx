import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Profile from "../assets/images/janina.JPG";

const technologies = [
  "Power Apps",
  "Power Automate",
  "Sharepoint",
  "Dataverse",
  "WordPress",
  "React",
  "Figma",
];

const allSkills = {
  "Programming Languages": [
    "Python",
    "JavaScript",
    "C",
  ],

  "Web Development": [
    "React",
    "SvelteKit",
    "WordPress",
    "Elementor",
    "WooCommerce",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Flask",
    "REST APIs",
  ],

  "Power Platform": [
    "Power Apps",
    "Power Automate",
    "Dataverse",
    "SharePoint",
    "Microsoft Forms",
    "Microsoft Bookings",
  ],

  Databases: [
    "PostgreSQL",
    "MySQL",
  ],

  Tools: [
    "Git",
    "GitHub",
    "Visual Studio Code",
    "Microsoft 365",
  ],

  "UI / UX": [
    "Figma",
  ],
};

const currently = [
  "Building Power Platform Solutions",
  "Developing WordPress Websites",
  "Project Coordination",
  "Learning UI / UX Design",
];

const stats = [
  {
    number: "5+",
    title: "Apps Built",
    icon: "</>",
  },
  {
    number: "50+",
    title: "Flows Automated",
    icon: "✦",
  },
  {
    number: "3",
    title: "Production Apps",
    icon: "♡",
  },
];

export default function About() {
  const [showSkills, setShowSkills] = useState(false);

  return (
    <>
      {/* ========================================================
          ABOUT SECTION
      ======================================================== */}

      <section
        id="about-me"
        className="
          relative
          flex
          min-h-screen
          items-center
          justify-center
          overflow-hidden
          px-5
          py-24
          sm:px-6
          lg:px-8
        "
      >

        {/* Background */}

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
            -left-32
            top-20
            -z-10
            h-[28rem]
            w-[28rem]
            rounded-full
            bg-neutral-200/40
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            -z-10
            h-[25rem]
            w-[25rem]
            rounded-full
            bg-pink-200/20
            blur-[180px]
          "
        />

        <div className="mx-auto w-full max-w-7xl">

          {/* =====================================================
              HEADING
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 12,
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
                About Me
              </h2>

              <div
                className="
                  mx-auto
                  mt-1
                  h-[2px]
                  w-0
                  rounded-full
                  bg-neutral-800
                  transition-all
                  duration-500
                  group-hover:w-full
                "
              />

            </div>

            <p className="mt-2 text-sm text-neutral-400">
              ˚₊‧꒰ა ☆ ໒꒱ ‧₊˚
            </p>

          </motion.div>


          {/* =====================================================
              MAIN SECTION
          ===================================================== */}

          <div
            className="
              mt-12
              grid
              grid-cols-1
              items-start
              gap-8
              lg:grid-cols-[260px_1fr]
              lg:gap-10
            "
          >

            {/* ===================================================
                PROFILE CARD
            =================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
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
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group
                rounded-[32px]
                border
                border-neutral-200/80
                bg-white/60
                p-5
                shadow-xl
                shadow-black/5
                backdrop-blur-xl
                transition-colors
                duration-500
                hover:border-neutral-500
                sm:p-6
                lg:p-6
              "
            >

              {/* =================================================
                  MOBILE + TABLET
              ================================================= */}

              <div
                className="
                  flex
                  flex-col
                  items-center
                  text-center
                  lg:hidden
                "
              >

                {/* Image */}

                <div
                  className="
                    h-36
                    w-36
                    overflow-hidden
                    rounded-[26px]
                    sm:h-44
                    sm:w-44
                    sm:rounded-[28px]
                  "
                >

                  <img
                    src={Profile}
                    alt="Janina"
                    className="
                      block
                      h-full
                      w-full
                      object-cover
                      object-[50%_15%]
                    "
                  />

                </div>


                {/* Profile Information */}

                <div className="mt-5">

                  <h3 className="text-sm font-medium text-neutral-800 sm:text-base">
                    Janinalaine Platero
                  </h3>

                  <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
                    Software Developer
                  </p>

                  <p className="text-xs text-neutral-500 sm:text-sm">
                    UP Diliman • BS Computer Science
                  </p>

                </div>

              </div>


              {/* =================================================
                  DESKTOP
              ================================================= */}

              <div className="hidden lg:block">

                <div
                  className="
                    h-[290px]
                    w-full
                    overflow-hidden
                    rounded-[28px]
                  "
                >

                  <img
                    src={Profile}
                    alt="Janina"
                    className="
                      block
                      h-full
                      w-full
                      object-cover
                      object-[50%_15%]
                    "
                  />

                </div>

                <div className="mt-4 text-center">

                  <h3 className="text-sm font-medium text-neutral-800">
                    Janinalaine Platero
                  </h3>

                  <p className="mt-1 text-xs text-neutral-500">
                    Software Developer
                  </p>

                  <p className="text-xs text-neutral-500">
                    UP Diliman • BS Computer Science
                  </p>

                </div>

              </div>

            </motion.div>


            {/* ===================================================
                ABOUT CARD
            =================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
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
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group
                rounded-[32px]
                border
                border-neutral-200/80
                bg-white/60
                p-6
                shadow-xl
                shadow-black/5
                backdrop-blur-xl
                transition-colors
                duration-500
                hover:border-neutral-400
                sm:p-7
                lg:p-8
              "
            >

              {/* =================================================
                  INTRODUCTION
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block"
              >

                <h3 className="text-lg font-normal text-neutral-900">

                  Hi!{" "}

                  <span className="relative inline-block font-semibold">

                    I'm Janina.

                    {/* Permanent animated underline */}

                    <motion.span
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: "100%",
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        absolute
                        left-0
                        bottom-[-5px]
                        h-[2px]
                        rounded-full
                        bg-neutral-900
                      "
                    />

                  </span>

                </h3>

              </motion.div>


              {/* Description */}

              <p
                className="
                  mt-5
                  text-[15px]
                  leading-7
                  text-neutral-600
                  sm:text-sm
                "
              >
                I enjoy developing Power Platform business solutions and
                WordPress websites, but I'm especially drawn to the creative
                side of technology. I love designing user interfaces, and
                continuously exploring new tools and technologies that help
                me create thoughtful digital products.
              </p>


              {/* Divider */}

              <div className="my-6 flex items-center gap-3">

                <div className="h-px flex-1 bg-neutral-200" />

              </div>


              {/* =================================================
                  TECHNOLOGIES
              ================================================= */}

              <div className="mt-2">

                <div
                  className="
                    mb-4
                    flex
                    items-center
                    justify-between
                  "
                >

                  <p className="text-xs font-medium text-neutral-500">
                    technologies
                  </p>

                  <button
                    onClick={() => setShowSkills(true)}
                    className="
                      group
                      flex
                      items-center
                      gap-1
                      text-xs
                      text-neutral-500
                      transition-colors
                      duration-300
                      hover:text-neutral-900
                    "
                  >

                    See all

                    <span
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      →
                    </span>

                  </button>

                </div>


                <div className="flex flex-wrap gap-2 sm:gap-3">

                  {technologies.map((tech, index) => (

                    <motion.div
                      key={tech}
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.4 + index * 0.05,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{
                        y: -2,
                        scale: 1.03,
                      }}
                      className="
                        rounded-full
                        border
                        border-white/80
                        bg-gradient-to-r
                        from-pink-100/80
                        via-white/70
                        to-rose-100/80
                        px-3
                        py-2
                        text-xs
                        font-medium
                        text-neutral-700
                        shadow-sm
                        shadow-pink-100/40
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:shadow-lg
                        sm:px-4
                      "
                    >
                      {tech}
                    </motion.div>

                  ))}

                </div>

              </div>


              {/* =================================================
                  CURRENTLY WORKING ON
              ================================================= */}

              <div className="mt-7">

                <p className="mb-4 text-xs font-medium text-neutral-500">
                  currently working on:
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3">

                  {currently.map((item) => (

                    <div
                      key={item}
                      className="
                        rounded-full
                        border
                        border-neutral-200/80
                        bg-white/70
                        px-3
                        py-2
                        text-xs
                        text-neutral-700
                        backdrop-blur-xl
                        transition-colors
                        duration-300
                        hover:border-neutral-400
                        sm:px-4
                      "
                    >
                      {item}
                    </div>

                  ))}

                </div>

              </div>

            </motion.div>

          </div>


          {/* =====================================================
              STATS
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
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
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-14"
          >

            <div
              className="
                h-px
                w-full
                bg-gradient-to-r
                from-transparent
                via-neutral-300
                to-transparent
              "
            />

            <div
              className="
                mt-8
                grid
                grid-cols-3
                gap-3
                sm:gap-8
              "
            >

              {stats.map((stat, index) => (

                <motion.div
                  key={stat.title}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group text-center"
                >

                  <p
                    className="
                      text-base
                      text-neutral-400
                      transition-colors
                      duration-300
                      group-hover:text-neutral-800
                      sm:text-lg
                    "
                  >
                    {stat.icon}
                  </p>

                  <h3
                    className="
                      mt-2
                      text-2xl
                      font-semibold
                      text-neutral-900
                      sm:text-4xl
                    "
                  >
                    {stat.number}
                  </h3>

                  <p
                    className="
                      relative
                      mt-1
                      inline-block
                      text-xs
                      text-neutral-500
                      sm:text-sm
                    "
                  >

                    {stat.title}

                    <span
                      className="
                        absolute
                        bottom-[-4px]
                        left-1/2
                        h-[1.5px]
                        w-0
                        -translate-x-1/2
                        rounded-full
                        bg-neutral-800
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />

                  </p>

                </motion.div>

              ))}

            </div>

          </motion.div>

        </div>

      </section>


      {/* ========================================================
          SKILLS MODAL
      ======================================================== */}

      <AnimatePresence>

        {showSkills && (

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
            onClick={() => setShowSkills(false)}
            className="
              fixed
              inset-0
              z-[999]
              flex
              items-center
              justify-center
              bg-black/25
              p-6
              backdrop-blur-sm
            "
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.98,
                y: 12,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.99,
                y: 8,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(e) => e.stopPropagation()}
              className="
                w-full
                max-w-3xl
                max-h-[90vh]
                overflow-hidden
                rounded-[32px]
                border
                border-neutral-200/80
                bg-white/75
                p-5
                shadow-2xl
                shadow-black/10
                backdrop-blur-2xl
                sm:p-6
                lg:p-8
              "
            >

              {/* =================================================
                  MODAL HEADER
              ================================================= */}

              <div className="flex items-center justify-between">

                <div>

                  <h2
                    style={{ fontFamily: "Cavalhatriz" }}
                    className="text-3xl text-neutral-900"
                  >
                    Skills
                  </h2>

                  <p className="mt-1 text-sm text-neutral-500">
                    Technologies and tools I've worked with.
                  </p>

                </div>

                <button
                  onClick={() => setShowSkills(false)}
                  className="
                    h-10
                    w-10
                    rounded-full
                    border
                    border-neutral-200
                    bg-white/70
                    text-lg
                    transition-all
                    duration-300
                    hover:rotate-90
                    hover:border-neutral-400
                  "
                >
                  ✕
                </button>

              </div>


              {/* Divider */}

              <div className="my-7 h-px bg-neutral-200" />


              {/* =================================================
                  SKILLS SCROLL AREA
              ================================================= */}

              <div
                className="
                  about-skills-scrollbar

                  max-h-[70vh]
                  space-y-7
                  overflow-y-auto
                  pr-3

                  sm:max-h-[60vh]
                "
              >

                {Object.entries(allSkills).map(
                  ([category, skills]) => (

                    <div key={category}>

                      <h3 className="mb-3 text-sm font-medium text-neutral-800">
                        {category}
                      </h3>

                      <div className="flex flex-wrap gap-3">

                        {skills.map((skill) => (

                          <motion.div
                            key={skill}
                            whileHover={{
                              y: -2,
                              scale: 1.03,
                            }}
                            className="
                              rounded-full
                              border
                              border-white/80
                              bg-gradient-to-r
                              from-pink-100/80
                              via-white/70
                              to-rose-100/80
                              px-4
                              py-2
                              text-xs
                              font-medium
                              text-neutral-700
                              shadow-sm
                              shadow-pink-100/30
                              backdrop-blur-xl
                            "
                          >
                            {skill}
                          </motion.div>

                        ))}

                      </div>

                    </div>

                  )
                )}

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}