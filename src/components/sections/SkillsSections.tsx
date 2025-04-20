"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

type Skill = {
  name: string;
  description?: string;
  icon: string;
};

const SkillCard = ({ skill, delay = 0 }: { skill: Skill; delay?: number }) => (
  <motion.div
    className="bg-white/5 p-6 border border-white/5 rounded-lg transition-all duration-200 hover:bg-white/15 hover:-translate-y-1 will-change-transform"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay }}
    viewport={{ once: true, margin: "-50px" }}
  >
    <div className={`flex items-center ${skill.description ? "mb-3" : "py-3"}`}>
      <i className={`${skill.icon} text-3xl text-blue-400 mr-3`}></i>
      <h4 className="text-xl text-white">{skill.name}</h4>
    </div>
    {skill.description && (
      <p className="text-white/70 text-sm">{skill.description}</p>
    )}
  </motion.div>
);

export default function SkillsSection() {
  const frontendSkills: Skill[] = [
    {
      name: "React",
      description: "컴포넌트 기반 UI 개발과 상태 관리",
      icon: "devicon-react-plain",
    },
    {
      name: "TypeScript",
      description: "타입 안전성을 갖춘 JavaScript 개발",
      icon: "devicon-typescript-plain",
    },
    {
      name: "Next.js",
      description: "서버 사이드 렌더링 및 정적 사이트 생성",
      icon: "devicon-nextjs-plain",
    },
    {
      name: "HTML/CSS",
      description: "웹 마크업 및 스타일링",
      icon: "devicon-html5-plain",
    },
    {
      name: "Tailwind CSS",
      description: "유틸리티 우선 CSS 프레임워크",
      icon: "devicon-tailwindcss-plain",
    },
    {
      name: "JavaScript",
      description: "동적 웹 기능 구현",
      icon: "devicon-javascript-plain",
    },
  ];

  const otherSkills: Skill[] = [
    {
      name: "Node.js",
      description: "서버 사이드 JavaScript 런타임",
      icon: "devicon-nodejs-plain",
    },
    {
      name: "Git",
      description: "버전 관리 및 협업 워크플로우",
      icon: "devicon-git-plain",
    },
    {
      name: "UI/UX",
      description: "사용자 중심 인터페이스 디자인",
      icon: "fa-solid fa-bezier-curve",
    },
  ];

  const coreSkills: Skill[] = [
    { name: "반응형 웹 디자인", icon: "fa-solid fa-tablet-screen-button" },
    { name: "사용자 경험 최적화", icon: "fa-solid fa-users" },
    { name: "모던 웹 프레임워크", icon: "fa-solid fa-code" },
    { name: "웹 애플리케이션 개발", icon: "fa-solid fa-window-maximize" },
    { name: "크로스 브라우저 호환성", icon: "fa-solid fa-display" },
    { name: "성능 최적화", icon: "fa-solid fa-gauge-high" },
  ];

  return (
    <section id="skills" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-8">
        <SectionHeader title="SKILLS" />
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl font-light mb-12 text-white"
          >
            기술적 전문성
          </motion.h3>

          <div className="mb-12">
            <h4 className="text-white/60 mb-8 text-xl">프론트엔드 기술</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {frontendSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} delay={index * 0.1} />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white/60 mb-8 text-xl">기타 기술</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {otherSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-3xl font-light mb-8 text-white">주요 역량</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {coreSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} delay={index * 0.1} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Font Awesome 및 Devicon을 위한 CDN 링크 */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/devicon/2.15.1/devicon.min.css"
      />
    </section>
  );
}
