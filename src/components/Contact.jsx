import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact-me"
      className="
        relative
        flex
        items-center
        overflow-hidden

        min-h-screen

        px-5
        sm:px-6
        lg:px-8

        py-20
        sm:py-24
        lg:py-32
      "
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-pink-200/20 blur-[220px]" />

      <div className="absolute -right-20 bottom-0 h-[28rem] w-[28rem] rounded-full bg-rose-200/20 blur-[220px]" />

      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-14 text-center text-sm text-neutral-400">
          Thanks for scrolling this far ✦
        </p>

        <div
          className="
            grid
            items-center

            gap-16

            lg:grid-cols-[1.35fr_1fr]
          "
        >
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              flex
              flex-col

              items-center
              text-center

              lg:items-start
              lg:text-left
            "
          >
            <h2
              style={{ fontFamily: "Cavalhatriz" }}
              className="
                leading-[0.95]

                text-[3.6rem]
                sm:text-[5rem]
                lg:text-[6.8rem]

                text-[#360c13]
              "
            >
              Let's
              <br />
              build
              <br />
              something
              <br />
              great!
            </h2>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              space-y-10

              text-center
              lg:text-left
            "
          >
            {/* EMAIL */}

            <div>
              <p className="mb-3 text-sm font-medium text-neutral-400">
                Email
              </p>

              <a
                href="mailto:janinalaine.platero@gmail.com"
                className="
                  inline-block

                  break-all

                  border-b
                  border-[#360c13]

                  pb-1

                  text-base
                  sm:text-lg
                  lg:text-xl

                  font-medium

                  text-[#360c13]

                  transition-all
                  duration-300

                  hover:text-pink-500
                  hover:border-pink-500
                "
              >
                janinalaine.platero@gmail.com
              </a>

              <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-neutral-500 lg:mx-0">
                Based in the Philippines and available for remote opportunities
                worldwide.
              </p>
            </div>

            {/* SOCIALS */}

            <div>
              <p className="mb-4 text-sm font-medium text-neutral-400">
                Socials
              </p>

              <div
                className="
                  flex
                  flex-wrap
                  justify-center

                  gap-6

                  lg:justify-start
                "
              >
                <a
                  href="https://github.com/jnnln"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    items-center
                    gap-2

                    text-neutral-700

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:text-pink-500
                  "
                >
                  <FaGithub size={18} />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/jnnln/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    items-center
                    gap-2

                    text-neutral-700

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:text-pink-500
                  "
                >
                  <FaLinkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </div>

            {/* AVAILABILITY */}

            <div>
              <p className="mb-3 text-sm font-medium text-neutral-400">
                Currently Open For
              </p>

              <p className="text-neutral-700">
                ✦ Full-time Opportunities
              </p>
            </div>

            {/* BUTTON */}

            <a
              href="/resume_janinalaine_platero.pdf"
              className="
                inline-flex
                items-center
                gap-3

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

                backdrop-blur-xl

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#360c13]
                hover:bg-white
                hover:shadow-xl
                hover:shadow-[#360c13]/10

                active:scale-95
              "
            >
              Download Resume →
            </a>
          </motion.div>
        </div>

        {/* Footer */}

        <div className="mt-24 text-center text-sm text-neutral-400">
          Designed & developed by Janina ♡
        </div>
      </div>
    </section>
  );
}