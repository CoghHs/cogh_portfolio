"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

export default function ProfileSection() {
  return (
    <section
      id="profile"
      className="min-h-screen py-24 flex items-center bg-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-8">
        <SectionHeader title="PROFILE" />
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-2/5"
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/images/cogh.png"
                alt="profile"
                width={500}
                height={500}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-full md:w-3/5"
          >
            <h3 className="text-3xl font-light mb-6 text-white">
              항상 새로운 도전을 마다하지 않는 개발자
            </h3>
            <div className="space-y-4 text-white/80">
              <p>
                다양한 프로젝트 경험을 바탕으로 사용자 중심의 웹 애플리케이션을
                개발하는 프론트엔드 개발자입니다.
              </p>
              <p>
                React, TypeScript, Next.js 등 최신 기술 스택을 활용하여
                효율적이고 확장 가능한 웹 서비스를 구축하는 데 전문성을 가지고
                있습니다.
              </p>
              <p>
                디자인과 개발 사이의 간극을 줄이기 위해 디자이너와 긴밀하게
                협업하며, 완성도 높은 결과물을 만들어내는 것을 목표로 합니다.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm text-white/60 mb-2">연락처</h4>
                <p className="text-white">mrpanda2412@gmail.com</p>
              </div>
              <div>
                <h4 className="text-sm text-white/60 mb-2">거주지</h4>
                <p className="text-white">경기도 용인시 기흥구</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
