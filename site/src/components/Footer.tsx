"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer className="py-12 px-6 md:px-12 max-w-6xl mx-auto border-t border-border">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
      >
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} Sayantan Chatterjee
        </p>
        <p className="text-xs text-muted">
          Pune, India
        </p>
      </motion.div>
    </footer>
  );
}
