import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact-me"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        px-6
        py-32
      "
    >
      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-[30rem] w-[30rem] rounded-full bg-pink-200/20 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[26rem] w-[26rem] rounded-full bg-rose-200/20 blur-[180px]" />

      <div className="mx-auto w-full max-w-5xl">
        {/* Small Heading */}

        <p className="mb-12 text-center text-sm text-neutral-400">
          Thanks for scrolling this far ✦
        </p>

        {/* Main Grid */}

        <div
          className="
            grid
            items-center
            gap-12

            lg:grid-cols-[1.3fr_1fr]
          "
        >
          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2
              style={{ fontFamily: "Cavalhatriz" }}
              className="
                leading-[0.95]
                text-[5rem]
                text-[#360c13]

                md:text-[7rem]
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

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
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
                  border-b
                  border-[#360c13]
                  pb-1

                  text-xl
                  font-medium

                  text-[#360c13]

                  transition-all
                  duration-300

                  hover:border-pink-500
                  hover:text-pink-500
                "
              >
                janinalaine.platero@gmail.com
              </a>
            </div>

            {/* SOCIALS */}

            <div>
              <p className="mb-4 text-sm font-medium text-neutral-400">
                Socials
              </p>

              <div className="flex gap-8">
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
              <p className="mb-4 text-sm font-medium text-neutral-400">
                Currently Open For
              </p>

              <p className="text-neutral-700">
                ✦ Full-time Opportunities
              </p>
            </div>

            {/* RESUME */}

            <a
              href="/resume.pdf"
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
              "
            >
              Download Resume →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}