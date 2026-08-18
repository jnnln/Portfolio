import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onClick(project)}
      className="
        group
        flex
        h-[460px]
        cursor-pointer
        flex-col
        overflow-hidden
        rounded-[28px]
        border
        border-neutral-200/80
        bg-white/60
        shadow-lg
        shadow-black/5
        backdrop-blur-xl
        transition-colors
        duration-300
        hover:border-neutral-400
      "
    >

      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div
        className="
          mx-4
          mt-4
          h-52
          shrink-0
          overflow-hidden
          rounded-2xl
        "
      >
        <img
          src={project.image}
          alt={project.title}
          className="
            block
            h-full
            w-full
            object-cover
            object-top
          "
        />
      </div>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="flex flex-1 flex-col p-4">

        {/* ===================================================
            TITLE
        =================================================== */}

        <div className="min-h-[48px]">

          <h3
            className="
              text-lg
              font-semibold
              leading-6
              text-neutral-900
            "
          >
            {project.title}
          </h3>

        </div>


        {/* ===================================================
            DESCRIPTION
        =================================================== */}

        <p
          className="
            mt-3
            min-h-[60px]
            line-clamp-3
            text-sm
            leading-5
            text-neutral-500
          "
        >
          {project.overview}
        </p>


        {/* ===================================================
            TECHNOLOGIES
        =================================================== */}

        <div
          className="
            mt-5
            min-h-[24px]
            flex
            flex-wrap
            items-center
            gap-x-3
            gap-y-1
          "
        >

          {project.technologies
            .slice(0, 3)
            .map((tech, index) => (

              <span
                key={tech}
                className="
                  text-xs
                  text-neutral-500
                "
              >
                {tech}
                {index < Math.min(project.technologies.length, 3) - 1 && (
                  <span className="ml-3 text-neutral-300">
                    •
                  </span>
                )}
              </span>

            ))}

        </div>


        {/* ===================================================
            BOTTOM
        ===================================================== */}

        <div className="mt-auto">

          <div
            className="
              flex
              items-center
              justify-between
              border-t
              border-neutral-100
              pt-4
            "
          >

            {/* YEAR */}

            <span
              className="
                shrink-0
                text-xs
                text-neutral-400
              "
            >
              {project.year}
            </span>


            {/* =================================================
                LINKS
            ================================================= */}

            <div
              className="
                flex
                flex-wrap
                items-center
                justify-end
                gap-2
              "
              onClick={(e) => e.stopPropagation()}
            >

              {/* WEBSITE */}

              {project.links?.website && (

                <a
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-1
                    text-[11px]
                    font-medium
                    text-neutral-500
                    transition-colors
                    duration-300
                    hover:text-neutral-900
                  "
                >
                  Website
                  <HiOutlineArrowUpRight className="h-3 w-3" />
                </a>

              )}


              {/* KIOSK */}

              {project.links?.kiosk && (

                <a
                  href={project.links.kiosk}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-1
                    text-[11px]
                    font-medium
                    text-neutral-500
                    transition-colors
                    duration-300
                    hover:text-neutral-900
                  "
                >
                  Kiosk
                  <HiOutlineArrowUpRight className="h-3 w-3" />
                </a>

              )}


              {/* GITHUB */}

              {project.links?.github && (

                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-1
                    text-[11px]
                    font-medium
                    text-neutral-500
                    transition-colors
                    duration-300
                    hover:text-neutral-900
                  "
                >
                  GitHub
                  <HiOutlineArrowUpRight className="h-3 w-3" />
                </a>

              )}

            </div>

          </div>

        </div>

      </div>

    </motion.article>
  );
}