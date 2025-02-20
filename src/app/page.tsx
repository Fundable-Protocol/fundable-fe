import Blog from "@/components/organisms/Blog";
import Faq from "@/components/organisms/Faq";
import Features from "@/components/organisms/Features";
import Footer from "@/components/organisms/Footer";
import Hero from "@/components/organisms/Hero";
import Utilities from "@/components/organisms/Utilities";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Utilities />
      <Faq />
      <Blog />
      <Footer />
    </main>
  );
}
