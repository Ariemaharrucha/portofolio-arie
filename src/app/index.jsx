import { AboutSection } from "../components/section/about.section.jsx";
import { AosWrapper } from "../components/section/aos.wrapper.jsx";
import { ArticleSection } from "../components/section/article.section.jsx";
import { ContactSection } from "../components/section/contact.section.jsx";
import { HeroSection } from "../components/section/hero.section.jsx";
import { PortofolioSection } from "../components/section/porto.section.jsx";
import { Footer } from "../components/shared/footer.jsx";
import { Navbar } from "../components/shared/navbar.jsx";

export const App = () => {
  return (
    <main className="bg-white font-poppins ">
      <AosWrapper>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <PortofolioSection />
        <ContactSection />
        <ArticleSection />
        <Footer />
      </AosWrapper>
    </main>
  );
};
