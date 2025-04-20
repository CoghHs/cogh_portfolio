"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type NavItem = {
  name: string;
  href: string;
};

export default function Navigation() {
  const navItems: NavItem[] = [
    { name: "PROFILE", href: "#profile" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONNECT", href: "#connect" },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 flex justify-between items-center px-8 py-4 z-30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="#top"
            onClick={(e) => handleScroll(e, "top")}
            className="text-2xl font-light tracking-widest text-white cursor-pointer"
          >
            COGH
          </Link>
        </motion.div>
        <div className="flex gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="relative"
            >
              <Link
                href={item.href}
                className="text-white/80 hover:text-white text-sm font-light transition-colors"
                onClick={(e) => handleScroll(e, item.href.substring(1))}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.nav>
    </>
  );
}
