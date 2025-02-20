import Hero from "@/components/organisms/Hero";
import Features from "@/components/organisms/Features";
import Utilities from "@/components/organisms/Utilities";

export default function Home() {
  return (
    <main className="px-4 md:px-0 mx-auto max-w-96 md:max-w-7xl">
      <Hero />
      <Features />
      <Utilities />
    </main>
  );
}
