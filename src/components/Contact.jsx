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

        px-5
        py-20

        sm:px-6
        sm:py-24

        lg:px-8
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          absolute
          -left-40
          top-0
          h-[32rem]
          w-[32rem]
          rounded-full
          bg-pink-200/20
          blur-[220px]
        "
      />

      <div
        className="
          absolute
          -right-20
          bottom-0
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-rose-200/20
          blur-[220px]
        "
      />


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          mx-auto
          w-full
          max-w-5xl
        "
      >

        <div
          className="
            grid
            grid-cols-1
            items-center

            gap-10

            sm:gap-12

            lg:grid-cols-2
            lg:gap-16
          "
        >

          {/* =================================================
              LEFT — HEADING
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              w-full
              max-w-[360px]

              text-center

              lg:mx-0
              lg:justify-self-end
              lg:text-left
            "
          >

            <h2
              style={{ fontFamily: "Cavalhatriz" }}
              className="
                leading-[0.95]
                text-[#360c13]

                text-[3.4rem]
                sm:text-[4.5rem]
                lg:text-[5.4rem]
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


          {/* =================================================
              RIGHT — CONTACT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              w-full
              max-w-[360px]

              text-center

              lg:mx-0
              lg:justify-self-start
              lg:text-left
            "
          >

            {/* =================================================
                EMAIL
            ================================================= */}

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
                  font-medium
                  text-[#360c13]

                  sm:text-lg

                  transition-colors
                  duration-300

                  hover:border-pink-500
                  hover:text-pink-500
                "
              >
                janinalaine.platero@gmail.com
              </a>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-[330px]

                  text-sm
                  leading-7
                  text-neutral-500

                  lg:mx-0
                "
              >
                Based in the Philippines and available for remote
                opportunities worldwide.
              </p>

            </div>


            {/* =================================================
                SOCIALS
            ================================================= */}

            <div className="mt-7">

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

                    transition-colors
                    duration-300

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

                    transition-colors
                    duration-300

                    hover:text-pink-500
                  "
                >
                  <FaLinkedin size={18} />
                  LinkedIn
                </a>

              </div>

            </div>


            {/* =================================================
                AVAILABILITY
            ================================================= */}

            <div className="mt-7">

              <p className="mb-3 text-sm font-medium text-neutral-400">
                Currently Open For
              </p>

              <p className="text-neutral-700">
                ✦ Full-time Opportunities
              </p>

            </div>


            {/* =================================================
                RESUME
            ================================================= */}

            <div className="mt-7">

              <p className="mb-3 text-sm font-medium text-neutral-400">
                Resume
              </p>

              <div
                className="
                  flex
                  flex-wrap
                  justify-center
                  gap-3

                  lg:justify-start
                "
              >

                <a
                  href="/JaninalainePlatero_Resume_PowerPlatform.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-neutral-300

                    bg-white/70

                    px-5
                    py-2.5

                    text-sm
                    font-medium
                    text-neutral-800

                    shadow-sm
                    shadow-neutral-200/50

                    backdrop-blur-xl

                    transition-colors
                    duration-300

                    hover:border-[#360c13]
                    hover:bg-white

                    active:scale-95
                  "
                >
                  Power Platform ↓
                </a>


                <a
                  href="/JaninalainePlatero_Resume_WebDev.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    justify-center

                    rounded-full

                    border
                    border-neutral-300

                    bg-white/70

                    px-5
                    py-2.5

                    text-sm
                    font-medium
                    text-neutral-800

                    shadow-sm
                    shadow-neutral-200/50

                    backdrop-blur-xl

                    transition-colors
                    duration-300

                    hover:border-[#360c13]
                    hover:bg-white

                    active:scale-95
                  "
                >
                  Web Development ↓
                </a>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}