"use client";

import { motion } from "framer-motion";

export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="text-2xl font-light text-white/80 mb-1">{title}</h2>
        <div className="w-12 h-px bg-white/30" />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-3xl font-light mb-12 text-white"
      >
        {subtitle}
      </motion.h3>
    </>
  );
}
