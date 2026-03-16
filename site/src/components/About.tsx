"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });
  const hasAnimated = useRef(false);
  const [display, setDisplay] = useState("0");
  const isDecimal = value % 1 !== 0;

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    const controls = animate(0, value, {
      duration: 1.2,
      ease: [0.25, 0.1, 0, 1],
      onUpdate: (v) => {
        setDisplay(isDecimal ? v.toFixed(1) : String(Math.round(v)));
      },
    });

    return () => controls.stop();
  }, [isInView, value, isDecimal]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      number: <AnimatedCounter value={9} suffix="+" />,
      label: "Years Experience",
    },
    {
      number: <AnimatedCounter value={50} suffix="+" />,
      label: "Clients Managed",
    },
    {
      number: <AnimatedCounter value={11} suffix="+" />,
      label: "Verticals Served",
    },
    {
      number: <AnimatedCounter value={10} suffix="+" />,
      label: "AI Projects Built",
    },
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <div ref={ref} className="grid md:grid-cols-12 gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          className="md:col-span-4"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-muted">
            About
          </p>

          {/* Decorative line animation */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0, 1] }}
            className="hidden md:block w-px h-24 bg-border mt-6 origin-top"
          />
        </motion.div>

        <div className="md:col-span-8 space-y-8">
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
            Over nine years in the SaaS and AdTech world, I&apos;ve worked with
            companies like CleverTap, Adobe, and Branch — managing enterprise
            portfolios, building customer success frameworks, and driving
            revenue growth.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0, 1],
            }}
            className="text-lg text-muted leading-relaxed"
          >
            But there&apos;s another side. I&apos;m deeply fascinated by what AI
            can do when pointed at real, everyday problems. So I build things —
            apps that transcribe multilingual speech, journals that run entirely
            on your device, tools that make workflows smoother. I make apps,
            often without writing traditional code.
          </motion.p>

          {/* Horizontal rule with animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.1, 0, 1],
            }}
            className="h-px bg-border origin-left"
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.1, 0, 1],
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="group">
                <p className="text-2xl md:text-3xl font-light group-hover:text-muted transition-colors duration-500">
                  {stat.number}
                </p>
                <p className="text-xs text-muted mt-1 tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
