import Blog from "@/components/organisms/Blog";
import Faq from "@/components/organisms/Faq";
import Features from "@/components/organisms/Features";
import Footer from "@/components/organisms/Footer";
import Hero from "@/components/molecules/Hero";
import Navbar from "@/components/molecules/Navbar";
import Utilities from "@/components/organisms/Utilities";

const LandingPage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Utilities />
      <Faq />
      <Blog />
      <Footer />
    </main>
  );
};

export default LandingPage;
