import AboutSection from "@/components/home/AboutSection";
import HeroSlider from "@/components/home/HeroSlider";
import ProjectsGrid from "@/components/home/ProjectsGrid";
import ServiceIcons from "@/components/home/ServiceIcons";
import TestimonialSlider from "@/components/home/TestimonialSlider";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServiceIcons />
      <AboutSection/>
      <ProjectsGrid/>
      <TestimonialSlider/>
    </>
  );
}