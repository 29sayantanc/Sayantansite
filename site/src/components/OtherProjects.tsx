"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    name: "Cadence",
    description: "Workflow automation and task orchestration tool",
    icon: "01",
  },
  {
    name: "Maaya",
    description: "AI-powered creative and visual generation tool",
    icon: "02",
  },
  {
    name: "Prompto",
    description: "Prompt management and optimization toolkit",
    icon: "03",
  },
  {
    name: "Freedom",
    description: "Productivity and digital wellbeing application",
    icon: "04",
  },
  {
    name: "Newsletter",
    description: "Automated newsletter curation and distribution",
    icon: "05",
  },
  {
    name: "Discord Bot",
    description: "Custom bot for community management and automation",
    icon: "06",
  },
  {
    name: "Transcriber",
    description: "Audio-to-text transcription utility",
    icon: "07",
  },
  {
    name: "Video to Frame",
    description: "Video processing and frame extraction tool",
    icon: "08",
  },
];

function ProjectTile({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.25, 0.1, 0, 1],
      }}
      className="bg-background p-6 md:p-8 group cursor-default relative overflow-hidden"
    >
      {/* Hover background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-border/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div className="relative">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="text-base font-medium group-hover:translate-x-1 transition-transform duration-500">
              {project.name}
            </h4>
            <p className="text-sm text-muted mt-1">{project.description}</p>
          </div>
          <span className="text-[10px] font-mono text-muted/40 group-hover:text-muted transition-colors duration-500">
            {project.icon}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function OtherProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
        className="mb-12 flex items-center gap-6"
      >
        <p className="text-sm tracking-[0.3em] uppercase text-muted">
          Other Builds
        </p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0, 1] }}
          className="flex-1 h-px bg-border origin-left"
        />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
        {projects.map((project, i) => (
          <ProjectTile
            key={project.name}
            project={project}
            index={i}
            isInView={isInView}
          />
        ))}
      </div>
    </section>
  );
}
