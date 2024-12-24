import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { AboutSection } from "@/components/sections/about/about-section";
import { ContactSection } from "@/components/sections/contact/contact-section";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Services />
      <ContactSection />
    </main>
  );
}