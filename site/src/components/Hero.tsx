"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.25, 0.1, 0, 1] as const;

const reveal = {
  hidden: { y: 60, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.3 + i * 0.15, duration: 0.8, ease },
  }),
};

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-6xl mx-auto pt-16 relative">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        {/* Text */}
        <div className="md:col-span-7 space-y-8">
          <div className="overflow-hidden">
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="text-sm tracking-[0.3em] uppercase text-muted"
            >
              Sayantan Chatterjee
            </motion.p>
          </div>

          <div className="space-y-2">
            <div className="overflow-hidden">
              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={reveal}
                className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight"
              >
                Customer Success Leader
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                custom={2}
                initial="hidden"
                animate="visible"
                variants={reveal}
                className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight text-muted"
              >
                & AI Builder
              </motion.h1>
            </div>
          </div>

          <div className="overflow-hidden max-w-lg">
            <motion.p
              custom={3}
              initial="hidden"
              animate="visible"
              variants={reveal}
              className="text-base md:text-lg text-muted leading-relaxed"
            >
              I spend my days helping enterprise teams get the most out of their
              technology. Evenings, I build AI products that solve problems I
              care about.
            </motion.p>
          </div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="flex items-center gap-6 pt-4"
          >
            <a
              href="#projects"
              className="text-sm border-b border-foreground pb-1 hover:pb-2 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#experience"
              className="text-sm text-muted hover:text-foreground transition-colors duration-300"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-sm text-muted hover:text-foreground transition-colors duration-300"
            >
              Get in touch
            </a>
            <a
              href="/Sayantan_Chatterjee_CV.pdf"
              download
              className="text-sm text-muted hover:text-foreground transition-colors duration-300"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease }}
          className="md:col-span-5 flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Decorative ring */}
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.8, duration: 1.2, ease }}
              className="absolute -inset-4 border border-border rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, rotate: 10 }}
              animate={{ opacity: 0.5, rotate: 0 }}
              transition={{ delay: 1, duration: 1.2, ease }}
              className="absolute -inset-8 border border-border/50 rounded-full"
            />
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <Image
                src="/me.jpeg"
                alt="Sayantan Chatterjee"
                fill
                className="object-cover object-[center_15%]"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
