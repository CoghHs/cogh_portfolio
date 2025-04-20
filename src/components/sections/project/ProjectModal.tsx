"use client";

import { Project } from "@/types/project";
import { AnimatePresence, easeIn } from "framer-motion";
import { motion } from "framer-motion";
import ProjectDetailSection from "./ProjectDetail";
import ProjectGallery from "./ProjectGallery";
import ModalBgPhoto from "@/components/effect/ModalBgPhoto";

export default function ProjectDetailModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 배경 레이어 - 별도로 애니메이션 처리 */}
          <motion.div
            className="fixed inset-0 bg-zinc-900 z-40 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <ModalBgPhoto />
          </motion.div>

          {/* 콘텐츠 레이어 - 투명도 애니메이션 없이 슬라이드만 적용 */}
          <motion.div
            className="fixed inset-0 flex z-50"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 200,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full overflow-y-auto scrollbar-hide">
              <div className="h-full flex flex-col md:flex-row">
                {/* 왼쪽: 프로젝트 정보 */}
                <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto scrollbar-hide">
                  <div className="max-w-xl mx-auto">
                    <button
                      onClick={onClose}
                      className="mb-8 flex items-center text-white/70 hover:text-white transition-colors group"
                    >
                      <svg
                        className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        ></path>
                      </svg>
                      돌아가기
                    </button>

                    <div className="flex items-center space-x-2 mb-6">
                      <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
                      <h4 className="text-blue-400 font-medium">PROJECT</h4>
                    </div>

                    <h2 className="text-4xl font-bold text-white mb-6">
                      {project.title}
                    </h2>
                    <p className="text-lg text-white/80 mb-8">
                      {project.description}
                    </p>

                    <ProjectDetailSection title="기술 스택">
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-sm bg-blue-500/10 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </ProjectDetailSection>

                    {project.features && (
                      <ProjectDetailSection title="주요 기능">
                        <ul className="space-y-2 text-white/80">
                          {project.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <svg
                                className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </ProjectDetailSection>
                    )}

                    {project.challenge && (
                      <ProjectDetailSection title="도전 과제">
                        <p className="text-white/80">{project.challenge}</p>
                      </ProjectDetailSection>
                    )}

                    {project.solution && (
                      <ProjectDetailSection title="해결 방안">
                        <p className="text-white/80">{project.solution}</p>
                      </ProjectDetailSection>
                    )}

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 font-medium transition-colors"
                      >
                        프로젝트 방문하기
                      </a>
                    )}
                  </div>
                </div>

                {/* 오른쪽: 프로젝트 이미지 (스크롤 가능) */}
                <div className="w-full md:w-1/2 mt-8 overflow-y-auto scrollbar-hide">
                  <div className="max-w-2xl mx-auto space-y-8">
                    <ProjectGallery
                      images={project.detailImages || []}
                      title={project.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
