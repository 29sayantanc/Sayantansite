"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Senior Manager, Customer Success",
    company: "CleverTap",
    location: "Pune",
    period: "2024 — Present",
    url: "https://clevertap.com",
    description:
      "Owning the P&L for a $1.5M enterprise portfolio across BFSI and Health sectors. Architecting success frameworks, running EBRs with C-suite stakeholders, and maintaining 100% retention.",
  },
  {
    role: "Account Manager, Search & DSP",
    company: "Adobe",
    location: "Noida",
    period: "2023 — 2024",
    url: "https://www.adobe.com",
    description:
      "Strategic advisor for key APAC accounts spanning BFSI to EdTech. Managed campaign lifecycles end-to-end through AdCloud, driving revenue growth and long-term client loyalty.",
  },
  {
    role: "Senior Account Manager, Ads",
    company: "Branch Metrics",
    location: "Bangalore",
    period: "2021 — 2023",
    url: "https://www.branch.io",
    description:
      "Managed 10+ enterprise accounts including Amazon and Vodafone across India and APAC. Drove upsells through data-driven ROI reporting and served as the trusted advisor for Deep Linked Ads.",
  },
  {
    role: "Senior Manager, User Acquisition & Retention",
    company: "Hoichoi",
    location: "Kolkata",
    period: "2020 — 2021",
    url: "https://www.hoichoi.tv",
    description:
      "Led retention and LTV strategy for an SVOD platform. Managed a 50+ Lac INR digital marketing P&L, optimising across Google and Meta while identifying new growth channels.",
  },
  {
    role: "Senior Business Analyst, Digital Marketing",
    company: "Merkle Sokrati",
    location: "Pune",
    period: "2018 — 2020",
    url: "https://www.merkle.com",
    description:
      "Strategised and executed media plans for Dunzo, ESPN, and Zomato — managing ~7 Cr INR in monthly ad spend. Built partnerships with Google and Criteo.",
  },
  {
    role: "Assistant System Engineer",
    company: "Tata Consultancy Services",
    location: "Pune",
    period: "2016 — 2018",
    url: "https://www.tcs.com",
    description:
      "Part of the ITIS team managing O365 infrastructure, ensuring system uptime and resolving escalated technical issues.",
  },
];

function ExperienceItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.a
      ref={ref}
      href={exp.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease: [0.25, 0.1, 0, 1],
      }}
      className="grid md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-border group hover:bg-card/50 -mx-6 px-6 transition-colors duration-500 cursor-pointer no-underline"
    >
      <div className="md:col-span-3 flex items-start gap-3">
        {/* Timeline dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
          className="hidden md:block w-1.5 h-1.5 rounded-full bg-muted mt-1.5 shrink-0 group-hover:bg-foreground transition-colors duration-500"
        />
        <p className="text-xs text-muted tracking-wide">{exp.period}</p>
      </div>
      <div className="md:col-span-5">
        <h3 className="text-base font-medium group-hover:translate-x-1 transition-transform duration-500">
          {exp.role}
        </h3>
        <p className="text-sm text-muted mt-1">
          {exp.company} — {exp.location}
        </p>
      </div>
      <div className="md:col-span-4">
        <p className="text-sm text-muted leading-relaxed group-hover:text-foreground/70 transition-colors duration-500">
          {exp.description}
        </p>
      </div>
    </motion.a>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="py-32 px-6 md:px-12 max-w-6xl mx-auto"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
        className="mb-16 flex items-center gap-6"
      >
        <p className="text-sm tracking-[0.3em] uppercase text-muted">
          Experience
        </p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0, 1] }}
          className="flex-1 h-px bg-border origin-left"
        />
      </motion.div>

      <div>
        {experiences.map((exp, i) => (
          <ExperienceItem key={exp.company} exp={exp} index={i} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0, 1] }}
        className="mt-12 flex items-center gap-3"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-muted" />
        <p className="text-sm text-muted">
          B.Tech in Information Technology — WBUT, Kolkata (2012–2016)
        </p>
      </motion.div>
    </section>
  );
}
