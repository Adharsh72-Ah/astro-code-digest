import { HeroSection } from '@/components/HeroSection';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { TechStack } from '@/components/TechStack';
import { ProjectsShowcase } from '@/components/ProjectsShowcase';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ExperienceTimeline />
      <TechStack />
      <ProjectsShowcase />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
