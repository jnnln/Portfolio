import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  "Home",
  "About Me",
  "My Projects",
  "Contact Me",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2">

      {/* Desktop / Tablet */}
      <div
        className="
          hidden
          md:block

          rounded-full
          border
          border-white/70

          bg-white/60

          px-4
          py-3

          backdrop-blur-2xl

          shadow-[0_20px_50px_rgba(0,0,0,0.08)]
        "
      >
        <nav className="flex items-center justify-center gap-2">

          {links.map((link, index) => (
            <div
              key={link}
              className="flex items-center gap-2"
            >

              <a
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="
                  group
                  relative

                  rounded-full

                  border
                  border-neutral-300

                  bg-white/80

                  px-5
                  py-2.5

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
                "
              >
                {link}

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

                    group-hover:w-[60%]
                  "
                />
              </a>

              {index !== links.length - 1 && (
                <span className="text-xs text-neutral-400">
                  ✦
                </span>
              )}

            </div>
          ))}

        </nav>
      </div>

      {/* Mobile */}

      <div className="md:hidden">

        {/* Floating Button */}

        <button
          onClick={() => setOpen(!open)}
          className="
            flex
            h-14
            w-14
            items-center
            justify-center

            rounded-full

            border
            border-white/70

            bg-white/70

            backdrop-blur-2xl

            shadow-xl
          "
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Menu */}

        {open && (
          <div
            className="
              absolute
              right-0
              mt-4
              w-56

              rounded-3xl

              border
              border-white/70

              bg-white/80

              p-3

              backdrop-blur-2xl

              shadow-2xl
            "
          >

            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setOpen(false)}
                className="
                  mb-2
                  block

                  rounded-full

                  border
                  border-neutral-300

                  bg-white/80

                  px-5
                  py-3

                  text-sm
                  text-neutral-700

                  transition-all
                  duration-300

                  hover:border-black
                  hover:bg-white
                "
              >
                {link}
              </a>
            ))}

          </div>
        )}

      </div>

    </header>
  );
}