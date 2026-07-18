import { motion } from "framer-motion";

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
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

        transition-all
        duration-500

        hover:border-neutral-400
        hover:shadow-2xl
      "
    >
      {/* IMAGE */}

      <div className="overflow-hidden p-4 pb-0">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-48
            w-full

            rounded-2xl

            object-cover
            object-top

            transition-all
            duration-700

            group-hover:scale-105
          "
        />
      </div>

      {/* CONTENT */}

      <div className="flex flex-1 flex-col p-4">

        {/* Subtitle */}

        <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">
          {project.subtitle}
        </p>

        {/* Title */}

        <div className="mt-2 flex items-start justify-between gap-3">

          <h3 className="min-h-[48px] text-lg font-semibold leading-6 text-neutral-900">
            {project.title}
          </h3>

          {project.status && (
            <span
              className="
                rounded-full

                border
                border-neutral-300

                bg-neutral-100

                px-2.5
                py-1

                text-[10px]
                font-medium

                text-neutral-700
              "
            >
              {project.status}
            </span>
          )}

        </div>

        {/* Overview */}

        <p className="mt-2 line-clamp-3 text-sm leading-5 text-neutral-500">
          {project.overview}
        </p>

        {/* Technologies */}

        <div className="mt-3 flex flex-wrap gap-2">

          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="
                rounded-full

                border
                border-neutral-300

                bg-neutral-100

                px-3
                py-1

                text-[11px]
                font-medium

                text-neutral-700
              "
            >
              {tech}
            </span>
          ))}

          {project.technologies.length > 3 && (
            <span className="self-center text-xs text-neutral-400">
              +{project.technologies.length - 3}
            </span>
          )}

        </div>

        {/* Footer */}

        <div className="mt-auto flex items-center justify-between pt-4">

          <span className="text-xs text-neutral-400">
            {project.year}
          </span>

          <motion.div
            whileHover={{ x: 3 }}
            className="
              flex
              items-center
              gap-2

              text-sm
              font-medium

              text-neutral-800
            "
          >
            View Project
            <span>↗</span>
          </motion.div>

        </div>

      </div>
    </motion.article>
  );
}