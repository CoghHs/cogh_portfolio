"use client";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      {/* 메인 히어로 섹션 */}
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* 메인 컨텐츠 영역 */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-8">
          <motion.div
            className="mt-32 mb-40 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-light mb-6 tracking-tight"
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              프론트엔드 개발자
              <span className="font-medium block mt-2">박형석입니다.</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mt-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              창의적인 인터페이스와 직관적인 사용자 경험을 설계합니다.
            </motion.p>
          </motion.div>
        </div>

        {/* 하이라이트 라인 */}
        <motion.div
          className="absolute bottom-24 w-full overflow-hidden mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 2 }}
        >
          <motion.div
            className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.7, ease: "easeInOut" }}
          />
        </motion.div>

        {/* 스크롤 다운 인디케이터 */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <p className="text-white/60 text-sm mb-2 font-light">스크롤 하세요</p>
          <motion.div className="w-5 h-10 border border-white/20 rounded-full flex items-center justify-center">
            <motion.div
              className="w-1 h-1 bg-white/60 rounded-full"
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
