"use client";

import { motion } from "framer-motion";

export default function Noise() {
  return (
    <motion.div
      className="fixed inset-0 bg-repeat opacity-5 z-50 pointer-events-none top-0 left-0 w-full h-full"
      style={{ backgroundImage: "url(/images/noise.png)" }}
      animate={{
        backgroundPosition: [
          "0 0", // 0%
          "50px 50px", // 25%
          "20px 80px", // 50%
          "70px 30px", // 75%
          "0 0", // 100%
        ],
      }}
      transition={{
        duration: 0.2, // 전체 주기
        repeat: Infinity, // 무한 반복
        ease: "linear", // 기본 이징 (steps 대신 단계로 나눔)
        times: [0, 0.25, 0.5, 0.75, 1], // 각 단계의 타이밍
      }}
    />
  );
}
