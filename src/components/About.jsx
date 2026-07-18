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
  "Power Platform": [
    "Power Apps",
    "Power Automate",
    "Dataverse",
    "SharePoint",
    "Microsoft Forms",
    "Microsoft Bookings",
  ],

  "Web Development": [
    "React",
    "SvelteKit",
    "WordPress",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "Flask",
    "REST APIs",
  ],

  "Programming Languages": [
    "Python",
    "C",
    "JavaScript",
  ],

  Databases: [
    "PostgreSQL",
    "MySQL",
  ],

  "UI / UX & Design": [
    "Figma",
  ],

  Tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Microsoft 365",
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
          sm:px-6
          lg:px-8

          py-24
        "
      >
        {/* Background */}

        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-[#FFF9FA] to-white" />

        <div className="absolute -left-32 top-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-neutral-200/40 blur-[180px]" />

        <div className="absolute bottom-0 right-0 -z-10 h-[25rem] w-[25rem] rounded-full bg-pink-200/20 blur-[180px]" />

        <div className="mx-auto w-full max-w-7xl">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="text-center"
          >
            <div className="group inline-block">

              <h2
                style={{ fontFamily: "Cavalhatriz" }}
                className="
                text-3xl
                sm:text-4xl
                lg:text-5xl

                text-neutral-900
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

          {/* Main Section */}

          <div
            className="
              mt-12

              grid

              gap-8
              lg:gap-10

              grid-cols-1
              lg:grid-cols-[260px_1fr]

              items-start
            "
          >

            {/* PROFILE CARD */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              whileHover={{
                y: -5,
                scale: 1.01,
              }}
              className="
              group

              rounded-[32px]
              border
              border-neutral-200/80

              bg-white/60
              p-4
              sm:p-5
              lg:p-6

              shadow-xl
              shadow-black/5

              backdrop-blur-xl

              transition-all
              duration-500

              hover:border-neutral-400
              hover:shadow-2xl
              "
            >
              <div
              className="
                overflow-hidden

                mx-auto

                h-52
                w-52

                sm:h-60
                sm:w-60

                lg:mx-0
                lg:h-[290px]
                lg:w-full

                lg:rounded-[28px]
                rounded-full

                lg:rounded-[28px]
              "
            >
              <img
                src={Profile}
                alt="Janina"
                className="
                  h-full
                  w-full

                  object-cover
                  object-[50%_15%]

                  transition-all
                  duration-700

                  group-hover:scale-[1.03]
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

            </motion.div>

            {/* ABOUT CARD */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              whileHover={{
                y: -5,
              }}
              className="
              group

              rounded-[32px]
              border
              border-neutral-200/80

              bg-white/60
              p-6
              sm:p-7
              lg:p-8

              shadow-xl
              shadow-black/5

              backdrop-blur-xl

              transition-all
              duration-500

              hover:border-neutral-400
              hover:shadow-2xl
              "
            >
              <div className="inline-block group/title">

                <h3 className="text-lg font-normal text-neutral-900">
                  Hi! <b>I'm Janina.</b>
                </h3>

                <div
                  className="
                  mt-1
                  h-[2px]
                  w-0
                  rounded-full
                  bg-neutral-900
                  transition-all
                  duration-300
                  group-hover/title:w-full
                  "
                />

              </div>

              <p className="
              mt-5

              text-[15px]
              leading-7

              sm:text-sm

              text-neutral-600
              ">
                I enjoy developing Power Platform business solutions and WordPress websites, but I'm especially drawn to the creative side of technology. I love designing user interfaces, learning about user experience, and continuously exploring new tools and technologies that help me create thoughtful digital products.
              </p>

              {/* Divider */}

              <div className="my-6 flex items-center gap-3">

                <div className="h-px flex-1 bg-neutral-200" />

              </div>

              {/* Technologies */}

                <div className="mt-2">

                <div className="mb-4 flex items-center justify-between">

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

                        transition-all
                        duration-300

                        hover:text-neutral-900
                    "
                    >
                    See all

                    <span
                        className="
                        transition-all
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
                        y: 20,
                        }}
                        whileInView={{
                        opacity: 1,
                        y: 0,
                        }}
                        transition={{
                        delay: index * .08,
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

                        sm:px-4

                        text-xs
                        font-medium
                        text-neutral-700

                        shadow-sm
                        shadow-pink-100/40

                        backdrop-blur-xl

                        transition-all
                        duration-300

                        hover:shadow-lg
                        "
                    >
                        {tech}
                    </motion.div>
                    ))}

                </div>

                </div>
              

              {/* Currently */}

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

                      sm:px-4

                      text-xs
                      text-neutral-700

                      backdrop-blur-xl

                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:border-neutral-400
                      "
                    >
                      {item}
                    </div>
                  ))}

                </div>

              </div>

            </motion.div>

          </div>

                  {/* STATS */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14"
        >
          {/* Divider */}

          <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-8">

            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -3 }}
                className="group text-center"
              >
                <p className="text-lg text-neutral-400 transition-all duration-300 group-hover:text-neutral-800">
                  {stat.icon}
                </p>

                <h3 className="mt-2 text-3xl sm:text-4xl font-semibold text-neutral-900">
                  {stat.number}
                </h3>

                <p className="relative mt-2 inline-block text-sm text-neutral-500">
                  {stat.title}

                  <span
                    className="
                      absolute
                      left-1/2
                      bottom-[-4px]
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

    {/* ====================================================== */}
    {/* SKILLS MODAL */}
    {/* ====================================================== */}

    <AnimatePresence>

      {showSkills && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowSkills(false)}
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/25
            backdrop-blur-sm
            p-6
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: .92,
              y: 30,
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
              duration: .3,
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
              sm:p-6
              lg:p-8

              shadow-2xl
              shadow-black/10

              backdrop-blur-2xl
            "
          >

            {/* Header */}

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

                  hover:border-neutral-400
                  hover:rotate-90
                "
              >
                ✕
              </button>

            </div>

            {/* Divider */}

            <div className="my-7 h-px bg-neutral-200" />

            {/* Categories */}

            <div className="space-y-7 max-h-[70vh] sm:max-h-[60vh] overflow-y-auto pr-2">

              {Object.entries(allSkills).map(([category, skills]) => (

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

              ))}

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

    </>
  );
}