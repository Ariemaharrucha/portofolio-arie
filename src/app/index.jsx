import { AboutSection } from "../components/section/about.section.jsx";
import { ArticleSection } from "../components/section/article.section.jsx";
import { ContactSection } from "../components/section/contact.section.jsx";
import { HeroSection } from "../components/section/hero.section.jsx";
import { PortofolioSection } from "../components/section/porto.section.jsx";
import { Header } from "../components/shared/header.jsx";

export const App = () => {
  return (
    <main className="bg-white font-poppins scroll-smooth">
      <section className=" ">
        <Header />
        <HeroSection />
        <AboutSection />
        <PortofolioSection />
        <ContactSection />
        <ArticleSection />
      </section>
    </main>
  );
};
