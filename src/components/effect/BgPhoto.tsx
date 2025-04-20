"use client";

import { motion } from "framer-motion";

export default function BgPhoto() {
  return (
    <motion.div
      className="fixed opacity-25 pointer-events-none w-full h-full"
      style={{ backgroundImage: "url('/images/wave1.png')" }}
    />
  );
}
