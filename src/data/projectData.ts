import { Project } from "@/types/project";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "PORTFOLIO",
    description:
      "현재 보고 계신 이 웹사이트입니다. React와 Next.js, Framer Motion을 활용하여 제작했습니다.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: "/images/portfolio1.png",
    detailImages: [
      "/images/portfolio1.png",
      "/images/portfolio2.png",
      "/images/portfolio-detail3.png",
      "/images/portfolio-detail4.png",
    ],
    features: [
      "반응형 디자인으로 모든 기기에서 최적화된 사용자 경험",
      "Framer Motion을 활용한 부드러운 애니메이션",
      "다크 모드 지원",
      "SEO 최적화",
    ],
    challenge:
      "사용자의 관심을 끌면서도 프로젝트의 핵심 정보를 효과적으로 전달할 수 있는 인터페이스 설계가 필요했습니다.",
    solution:
      "미니멀한 디자인 언어를 채택하면서도 애니메이션과 인터랙션을 통해 내용의 몰입도를 높이는 방향으로 설계했습니다. 효과적인 정보 계층화를 통해 사용자가 원하는 정보를 쉽게 찾을 수 있도록 했습니다.",
    link: "#",
  },
  {
    id: 2,
    title: "CROGH",
    description: "모던한 UI/UX를 갖춘 크로키 플랫폼입니다.",
    technologies: [
      "Next.js",
      "Typescript",
      "Node.js",
      "Prisma",
      "Framer Motion",
      "Unsplash API",
    ],
    image: "/images/crogh.png",
    detailImages: [
      "/images/crogh.png",
      "/images/crogh2.png",
      "/images/crogh3.png",
      "/images/crogh4.png",
      "/images/crogh5.png",
      "/images/crogh6.png",
      "/images/crogh7.png",
    ],
    features: [
      "Unsplash API를 활용한 고품질 레퍼런스 이미지 제공",
      "실시간 그림 저장 및 공유 기능",
      "사용자 맞춤형 대시보드",
      "소셜 기능을 통한 커뮤니티 형성",
    ],
    challenge:
      "다양한 디바이스에서 일관된 드로잉 경험을 제공하면서도 고성능을 유지하는 것이 어려웠습니다.",
    solution:
      "캔버스 렌더링 최적화와 효율적인 상태 관리를 통해 반응성을 높이고, 사용자 경험에 집중했습니다. Prisma를 활용한 효율적인 데이터 처리로 대규모 이미지 데이터도 원활하게 처리할 수 있게 했습니다.",
    link: "https://crogh.vercel.app/",
  },
  {
    id: 3,
    title: "BOOK",
    description:
      "작가별로 책 정보를 확인하고 구매 링크로 바로 이동할 수 있는 웹사이트를 Next.js로 제작했습니다.",
    technologies: ["Next.js", "React", "CSS Modules", "Book API"],
    image: "/images/book.png",
    detailImages: [
      "/images/book.png",
      "/images/book2.png",
      "/images/book3.png",
    ],
    features: [
      "작가별 도서 분류 시스템",
      "도서 검색 및 필터링 기능",
      "외부 구매 링크 통합",
      "반응형 레이아웃",
    ],
    challenge:
      "다양한 도서 정보를 효율적으로 구조화하고 사용자가 원하는 도서를 빠르게 찾을 수 있는 방법이 필요했습니다.",
    solution:
      "직관적인 카테고리 시스템과 검색 기능을 결합하여 사용자가 쉽게 원하는 도서를 탐색할 수 있도록 했습니다. SEO 최적화를 통해 검색 엔진에서도 도서 정보가 잘 노출되도록 했습니다.",
    link: "https://next14-books-alpha.vercel.app/",
  },
];
