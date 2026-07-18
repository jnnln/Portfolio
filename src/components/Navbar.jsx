const links = [
  "Home",
  "About Me",
  "My Projects",
  "Contact Me",
];

export default function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2">

      {/* Floating Dock */}
      <div
        className="
          rounded-full

          border
          border-white/70

          bg-white/60

          px-5
          py-3

          backdrop-blur-2xl

          shadow-[0_20px_50px_rgba(0,0,0,0.08)]
        "
      >
        <nav
          className="
            flex
            items-center
            justify-center

            gap-3
          "
        >
          {links.map((link, index) => (
            <div key={link} className="flex items-center gap-3">

              {/* Navigation Pill */}
              <a
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="
                  group
                  relative

                  rounded-full

                  border
                  border-neutral-300

                  bg-white/80

                  px-6
                  py-3

                  text-xs
                  font-medium
                  text-neutral-700

                  backdrop-blur-md

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:border-black
                  hover:text-black

                  hover:shadow-lg
                  hover:shadow-black/5
                "
              >
                {link}

                {/* Underline Animation */}
                <span
                  className="
                    absolute

                    left-1/2
                    bottom-2

                    h-[1.5px]
                    w-0

                    -translate-x-1/2

                    rounded-full
                    bg-black

                    transition-all
                    duration-300
                    ease-out

                    group-hover:w-[60%]
                  "
                />
              </a>

              {/* Decorative Star */}
              {index !== links.length - 1 && (
                <span
                  className="
                    select-none

                    text-xs
                    text-neutral-500

                    transition-all
                    duration-500

                    hover:rotate-180
                    hover:scale-125
                  "
                >
                  ✦
                </span>
              )}

            </div>
          ))}
        </nav>
      </div>

    </header>
  );
}