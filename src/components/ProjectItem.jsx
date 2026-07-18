import { motion } from "framer-motion";

export default function ProjectItem({
  project,
  index,
  activeProject,
  setActiveProject,
}) {
  const isActive = activeProject.title === project.title;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
      }}
      onMouseEnter={() => setActiveProject(project)}
      className="
        group
        cursor-pointer
      "
    >
      <div
        className={`
          rounded-3xl
          border
          px-6
          py-6
          transition-all
          duration-500

          ${
            isActive
              ? "border-neutral-300 bg-white/60 shadow-lg backdrop-blur-xl"
              : "border-transparent hover:border-neutral-200 hover:bg-white/40"
          }
        `}
      >
        <div className="flex items-start justify-between gap-6">

          {/* Left */}

          <div className="flex gap-5">

            {/* Number */}

            <span
              className={`
                text-lg
                font-light

                ${
                  isActive
                    ? "text-neutral-900"
                    : "text-neutral-400"
                }
              `}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Text */}

            <div>

              <div className="flex items-center gap-3 flex-wrap">

                <h3
                  className={`
                    text-lg
                    font-medium
                    transition-all

                    ${
                      isActive
                        ? "text-neutral-900"
                        : "text-neutral-700"
                    }
                  `}
                >
                  {project.title}
                </h3>

                {project.status && (
                  <span
                    className="
                      rounded-full
                      border
                      border-pink-200
                      bg-pink-50
                      px-3
                      py-1
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-wide
                      text-pink-700
                    "
                  >
                    {project.status}
                  </span>
                )}

              </div>

              <p className="mt-2 text-sm text-neutral-500">
                {project.technologies.join(" • ")}
              </p>

              <p className="mt-3 max-w-xl text-sm leading-7 text-neutral-500">
                {project.description}
              </p>

            </div>

          </div>

          {/* Arrow */}

          <motion.div
            animate={{
              x: isActive ? 6 : 0,
            }}
            className="
              text-xl
              text-neutral-400
              transition-colors
              duration-300

              group-hover:text-neutral-900
            "
          >
            ↗
          </motion.div>

        </div>
      </div>

      {/* Divider */}

      {index !== 4 && (
        <div className="mx-6 h-px bg-neutral-200/80" />
      )}

    </motion.div>
  );
}