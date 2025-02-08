import Faq from "@/components/organisms/Faq";
import Features from "@/components/organisms/Features";
import Footer from "@/components/organisms/Footer";
import Hero from "@/components/organisms/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Faq/>
      <Footer/>
    </main>
  );
}
