"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function ProfileSection() {
  return (
    <section
      id="profile"
      className="min-h-screen py-24 flex items-center bg-gradient-to-b from-zinc-900 to-zinc-800"
    >
      <div className="max-w-6xl mx-auto px-8">
        <SectionHeader title="PROFILE" />

        <div className="flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-2/5"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden ">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src="/images/cogh.png"
                  alt="박형석 프로필"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-3/5"
          >
            <h3 className="text-4xl font-light mb-2 text-white tracking-tight">
              박형석
            </h3>
            <h4 className="text-xl text-blue-400 font-light mb-8">
              Frontend Developer
            </h4>

            <div className="space-y-4 text-white/80 text-lg">
              <p>
                아트와 코드의 경계를 넘나드는{" "}
                <span className="text-white font-medium">
                  크리에이티브 개발자
                </span>
                입니다. 탄탄한 기술 기반과 예술적 감각을 결합해 사용자에게
                특별한 경험을 선사합니다.
              </p>
              <p>
                React, TypeScript, Next.js 생태계에서{" "}
                <span className="text-white font-medium">
                  사용자 중심의 인터페이스
                </span>
                를 구현하는 데 전문성을 갖추고 있으며, 제 그림 실력은 UI/UX에
                대한 이해를 한층 더 깊게 합니다.
              </p>
              <p>
                활발하고 선한 성격으로 새로운 환경에 빠르게 적응하며, 사용자의
                니즈를 이해하고 공감하는 개발자가 되기 위해 노력합니다.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <p className="text-white">mrpanda2412@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/60">Location</p>
                  <p className="text-white">경기도 용인시 기흥구</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        >
          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">
              창의적 문제 해결
            </h3>
            <p className="text-white/70">
              아티스트의 시각과 개발자의 논리를 결합해 독창적인 솔루션을
              제시합니다.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">
              사용자 공감력
            </h3>
            <p className="text-white/70">
              친화적인 성격으로 사용자 관점에서 생각하고 직관적인 경험을
              디자인합니다.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">기술 전문성</h3>
            <p className="text-white/70">
              Next.js, TypeScript, React 생태계에서의 깊은 경험으로 견고한 웹
              애플리케이션을 구축합니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
