import { useState, useRef, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Background */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 -z-20 bg-gradient-to-b from-[#FFF8FA] via-white to-[#FFFDFD]"
      />

      {/* Floating Gradients */}

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-52 -top-32 -z-10 h-[36rem] w-[36rem] rounded-full bg-pink-200/30 blur-[170px]"
      />

      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-12rem] top-24 -z-10 h-[30rem] w-[30rem] rounded-full bg-rose-200/25 blur-[170px]"
      />

      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Hello World */}

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-4 text-sm tracking-wide text-neutral-500"
        >
          Hello, World! ✦
        </motion.p>

        {/* Name */}

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ fontFamily: "Cavalhatriz" }}
          className="
            text-[4.2rem]
            leading-none
            text-neutral-900
            md:text-[5.2rem]
            lg:text-[5.8rem]
          "
        >
          Janinalaine
          <br />
          Platero
        </motion.h1>

        {/* Role + Resume */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className="
              rounded-full
              border
              border-white/70
              bg-gradient-to-r
              from-pink-100/70
              via-white/60
              to-rose-100/70
              px-6
              py-3
              shadow-lg
              shadow-pink-200/20
              backdrop-blur-xl
            "
          >
            <p className="text-sm font-medium text-neutral-700">
              Software Developer
            </p>
          </motion.div>

          {/* Resume Dropdown */}

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-neutral-300
                bg-white/70
                px-6
                py-3
                text-sm
                font-medium
                text-neutral-800
                shadow-lg
                shadow-neutral-200/50
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#360c13]
              "
            >
              Download Resume
              <span
                className={`text-xs transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            <div
              className={`
                absolute
                left-1/2
                top-full
                z-50
                mt-3
                w-72
                -translate-x-1/2
                rounded-2xl
                border
                border-neutral-200
                bg-white/95
                p-2
                shadow-xl
                backdrop-blur-xl
                transition-all
                duration-200
                ${
                  open
                    ? "visible opacity-100 translate-y-0"
                    : "invisible opacity-0 translate-y-2"
                }
              `}
            >
              <a
                href="/JaninalainePlatero_Resume_PowerPlatform.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 transition hover:bg-pink-50"
              >
                <p className="font-medium text-neutral-800">
                  Power Platform Resume
                </p>
                <p className="text-xs text-neutral-500">
                  Power Apps • Power Automate • SharePoint
                </p>
              </a>

              <a
                href="/JaninalainePlatero_Resume_WebDev.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-1 block rounded-xl px-4 py-3 transition hover:bg-pink-50"
              >
                <p className="font-medium text-neutral-800">
                  Web Development Resume
                </p>
                <p className="text-xs text-neutral-500">
                  React • WordPress • Frontend
                </p>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Typewriter */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 h-8"
        >
          <p className="text-xl text-neutral-600">
            Building{" "}
            <span className="font-semibold text-neutral-900">
              <Typewriter
                words={[
                  "Power Platform Solutions",
                  "WordPress Websites",
                  "Web Applications",
                ]}
                loop={0}
                cursor
                cursorStyle="✦"
                typeSpeed={65}
                deleteSpeed={35}
                delaySpeed={1800}
              />
            </span>
          </p>
        </motion.div>

        {/* Description */}

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-4 max-w-md text-sm leading-6 text-neutral-500"
        >
          Turning ideas into business solutions through Power Apps,
          Power Automate, and thoughtful digital design.
        </motion.p>
      </div>
    </section>
  );
}