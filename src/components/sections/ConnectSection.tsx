"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function ConnectSection() {
  return (
    <section
      id="connect"
      className="py-24 min-h-screen flex items-center bg-black"
    >
      <div className="max-w-6xl mx-auto px-8">
        <SectionHeader title="CONNECT" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* 연락처 정보 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                <i className="fa-regular fa-envelope text-2xl text-blue-400 mr-4"></i>
                <div>
                  <h4 className="text-white text-lg">이메일</h4>
                  <a
                    href="mailto:mrpanda2412@gmail.com"
                    className="text-white/70 hover:text-blue-400 transition-colors"
                  >
                    mrpanda2412@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-center" whileHover={{ x: 5 }}>
                <i className="fa-brands fa-github text-2xl text-blue-400 mr-4"></i>
                <div>
                  <h4 className="text-white text-lg">깃허브</h4>
                  <a
                    href="https://github.com/CoghHs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-blue-400 transition-colors"
                  >
                    github.com/CoghHs
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 포부 메시지 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-light text-white mb-4 relative">
                감사합니다
              </h3>
              <p className="text-white/80 leading-relaxed">
                그림을 그리던 경험이 디자인 감각으로 이어져, 시각적으로 아름답고
                사용자 친화적인 인터페이스를 구현하는 데 큰 강점이 됩니다.
                예술적 시선과 기술적 전문성을 결합하여 보다 직관적이고 매력적인
                웹 경험을 창출하고자 합니다.
              </p>
              <p className="text-white/80 leading-relaxed">
                프론트엔드 개발자로 성장하기 위해 낯선 기술에도 적극적으로
                도전하고, 항상 사용자의 관점에서 생각하며 사용하기 좋은 서비스를
                만들고 싶습니다. 창의적인 문제 해결과 섬세한 디테일에 대한
                관심을 바탕으로, 기술과 예술의 경계를 흐릿하게 만드는 개발자가
                되겠습니다.
              </p>
              <div className="w-12 h-px bg-blue-400/40 mt-6"></div>
            </div>
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
