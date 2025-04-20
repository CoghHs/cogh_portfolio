import Navigation from "@/components/layout/NavBar";
import ConnectSection from "@/components/sections/ConnectSection";
import HomePage from "@/components/sections/HomePage";
import ProfileSection from "@/components/sections/ProfileSections";
import ProjectSection from "@/components/sections/project/ProjectSection";
import SkillsSection from "@/components/sections/SkillsSections";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HomePage />
      <ProfileSection />
      <SkillsSection />
      <ProjectSection />
      <ConnectSection />
    </main>
  );
}
