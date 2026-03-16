"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const featured = [
  {
    title: "Parrot",
    tagline: "The intelligent tray app built for India",
    description:
      "A desktop app that transcribes and translates mixed-language speech into 11+ Indian languages with a single hotkey. Built for the way Indians actually speak — switching between Hindi, English, Tamil, and more, mid-sentence.",
    tags: ["AI", "Transcription", "Desktop App", "Windows", "macOS"],
    link: "https://parrotapp.in",
    linkLabel: "parrotapp.in",
    image: "/parrotweb.png",
    accent: "from-amber-500/10 to-orange-500/10",
    borderAccent: "group-hover:border-amber-500/30",
  },
  {
    title: "Echo",
    tagline: "Your thoughts, completely private",
    description:
      "A privacy-focused, offline AI journal and conversational assistant. Capture thoughts via text or voice, analyse patterns, and engage with your entries — all while keeping your data entirely on your local machine.",
    tags: ["AI", "Privacy", "Python", "Offline-first"],
    link: "https://github.com/29sayantanc/Echo",
    linkLabel: "GitHub",
    image: "/echo.gif",
    accent: "from-purple-500/10 to-pink-500/10",
    borderAccent: "group-hover:border-purple-500/30",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof featured)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0, 1],
      }}
      className="group relative block no-underline cursor-pointer"
    >
      <div
        className={`border border-border rounded-sm overflow-hidden hover:border-muted transition-all duration-500 bg-background ${project.borderAccent}`}
      >
        {/* Project image / visual */}
        <div
          className={`relative w-full overflow-hidden bg-gradient-to-br ${project.accent}`}
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
            unoptimized
          />
          {/* Subtle gradient overlay at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="space-y-4 flex-1">
              <div>
                <h3 className="text-3xl md:text-4xl font-light tracking-tight text-foreground group-hover:translate-x-1 transition-transform duration-500">
                  {project.title}
                </h3>
                <p className="text-sm text-muted mt-2">{project.tagline}</p>
              </div>

              <p className="text-base text-muted leading-relaxed max-w-lg">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] tracking-wide uppercase text-muted border border-border rounded-full px-3 py-1 hover:border-muted hover:text-foreground transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <span
              className="inline-flex items-center gap-2 text-sm text-foreground border-b border-foreground pb-1 group-hover:pb-2 transition-all duration-300 shrink-0 self-start"
            >
              {project.linkLabel}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path
                  d="M3 1h8v8M11 1L1 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
        className="mb-16 flex items-center gap-6"
      >
        <p className="text-sm tracking-[0.3em] uppercase text-muted">
          Featured Projects
        </p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0, 1] }}
          className="flex-1 h-px bg-border origin-left"
        />
      </motion.div>

      <div className="space-y-8">
        {featured.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
