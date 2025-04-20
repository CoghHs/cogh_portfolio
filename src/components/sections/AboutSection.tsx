"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-2xl font-light text-white/80 mb-1">ABOUT</h2>
          <div className="w-12 h-px bg-white/30" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* 프로필 이미지 */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="w-full aspect-square bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-white/40">
                프로필 이미지
              </div>
            </div>
          </motion.div>

          {/* 소개 콘텐츠 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-3xl font-light text-white mb-8">About Me</h3>

            <div className="text-white/80 space-y-6">
              <p className="text-lg">
                안녕하세요, 프론트엔드 개발자 박형석입니다. 사용자 경험에 초점을
                맞춘 웹 애플리케이션을 개발하는 것을 좋아합니다.
              </p>
              <p>
                창의적인 디자인과 효율적인 코드 구현을 위해 항상 노력하고
                있으며, 최신 웹 기술과 트렌드를 지속적으로 학습하고 있습니다.
              </p>
              <p>저와 함께 일하고 싶으시다면 연락 부탁드립니다.</p>
            </div>

            {/* 연락처 정보 */}
            <motion.div
              className="mt-12 flex flex-wrap gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <a
                href="#"
                className="flex items-center text-white hover:text-blue-400 transition-colors"
              >
                <i className="fa-regular fa-envelope text-xl mr-2"></i>
                <span>이메일</span>
              </a>
              <a
                href="#"
                className="flex items-center text-white hover:text-blue-400 transition-colors"
              >
                <i className="fa-brands fa-github text-xl mr-2"></i>
                <span>깃허브</span>
              </a>
              <a
                href="#"
                className="flex items-center text-white hover:text-blue-400 transition-colors"
              >
                <i className="fa-brands fa-linkedin text-xl mr-2"></i>
                <span>링크드인</span>
              </a>
            </motion.div>

            {/* 기술 스택 */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h4 className="text-xl text-white/80 mb-6">주요 기술 스택</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  "React",
                  "TypeScript",
                  "Next.js",
                  "Tailwind",
                  "Node.js",
                  "GraphQL",
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 bg-zinc-900 text-white/80 border border-white/10 rounded-md"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -3,
                      backgroundColor: "rgba(255,255,255,0.05)",
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Font Awesome을 위한 CDN 링크 */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </section>
  );
}
