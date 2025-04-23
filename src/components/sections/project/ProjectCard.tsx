"use client";
import { Project } from "@/types/project";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    // 바깥 박스는 고정된 배경 + 라운드 처리
    <div className="bg-white/10 border-white/10 rounded-3xl overflow-hidden p-4 pb-6 ">
      {/* motion.div로 애니메이션 처리할 부분만 감쌈 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="cursor-pointer group "
        onClick={onClick}
      >
        {/* 이미지 */}
        <div className="relative h-60 rounded-2xl overflow-hidden mb-6 ">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : null}
        </div>

        {/* 제목 */}
        <h3 className="text-3xl font-semibold text-white/80 mb-4 px-2">
          {project.title}
        </h3>

        {/* 화살표 버튼 */}
        <div className="flex justify-end">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
