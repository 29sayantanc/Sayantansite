"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <div ref={ref} className="grid md:grid-cols-12 gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="md:col-span-4"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted">
            Contact
          </p>
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.25, 0.1, 0, 1],
            }}
            className="hidden md:block w-px h-24 bg-border mt-6 origin-top"
          />
        </motion.div>

        <div className="md:col-span-8 space-y-10">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.25, 0.1, 0, 1],
            }}
            className="text-2xl md:text-3xl font-light leading-relaxed"
          >
            Interested in working together, have questions about one of my
            projects, or just want to say hello? I&apos;d enjoy hearing from
            you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0, 1],
            }}
            className="space-y-6"
          >
            {/* Magnetic email link */}
            <a
              href="mailto:29.sayantan@gmail.com"
              className="block text-lg md:text-xl border-b border-foreground pb-2 hover:pb-3 transition-all duration-300 w-fit group"
            >
              <span className="group-hover:tracking-wide transition-all duration-500">
                29.sayantan@gmail.com
              </span>
            </a>

            <div className="flex items-center gap-8 pt-4">
              {[
                {
                  label: "GitHub",
                  href: "https://github.com/29sayantanc",
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/sayantan-chatterjee-05a8a5a3/",
                },
              ].map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.1,
                    ease: [0.25, 0.1, 0, 1],
                  }}
                  className="text-sm text-muted hover:text-foreground transition-colors duration-300 flex items-center gap-2 group"
                >
                  {link.label}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0"
                  >
                    <path
                      d="M3 1h8v8M11 1L1 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-flex items-center gap-2 text-xs text-muted border border-border rounded-full px-4 py-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Based in Pune, India
          </motion.div>
        </div>
      </div>
    </section>
  );
}
