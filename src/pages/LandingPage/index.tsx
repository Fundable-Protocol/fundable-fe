import Blog from "@/components/organisms/Blog";
import Faq from "@/components/organisms/Faq";
import Features from "@/components/organisms/Features";
import Footer from "@/components/organisms/Footer";
import Hero from "@/components/organisms/Hero";
import Navbar from "@/components/organisms/Navbar";
import Utilities from "@/components/organisms/Utilities";

const LandingPage = () => {
  return (
    <main className="px-4 md:px-0 mx-auto max-w-96 md:max-w-7xl">
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
