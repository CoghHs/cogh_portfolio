"use client";

import { Project } from "@/types/project";
import { useState } from "react";
import SectionHeader from "../SectionHeader";
import { projectsData } from "@/data/projectData";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal from "./ProjectModal";

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDetailOpen(true);
    // 스크롤 방지
    document.body.style.overflow = "hidden";
  };

  const closeDetail = () => {
    setIsDetailOpen(false);
    // 스크롤 복원
    document.body.style.overflow = "auto";
  };

  return (
    <section id="projects" className="min-h-screen py-24 bg-black/90">
      <div className="max-w-6xl mx-auto px-8">
        <SectionHeader title="PROJECTS" subtitle="주요 프로젝트" />
      </div>

      {/* 프로젝트 카드 컨테이너 */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </div>

      {/* 프로젝트 상세 모달 */}
      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          isOpen={isDetailOpen}
          onClose={closeDetail}
        />
      )}

      {/* Font Awesome CDN Link - 필요한 경우 */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </section>
  );
}
