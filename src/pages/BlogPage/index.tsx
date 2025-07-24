"use client";

import Navbar from "@/components/organisms/Navbar";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/organisms/Footer";
import { useState } from "react";
import { BlogPostItem } from "@/lib/BlogPostType";

const blogItems: BlogPostItem[] = Array.from({ length: 9 }, (_, index) => ({
  id: index + 1,
  title: "Talk it out with audio",
  description:
    "Effortlessly distribute funds to recipients, with complete transparency, robust security, and real-time tracking.",
  imageUrl: "/carousel-card-img.svg",
}));

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!email) return;
    const newData = { email };

    try {
      setIsSubmitting(true);
      console.log("Submitted data:", newData);
      // Api Handling here
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <Navbar />
      <section className="xl:min-h-screen flex flex-col space-y-10 xl:space-y-0 xl:justify-between py-16">
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold font-syne">
            Blog Posts
          </h1>
          <p className="text-lg text-gray-400 pt-2 font-sans">
            Get the latest updates about happenings at Fundable
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/imgs/blog-hero.jpg"
              alt="Featured Post"
              width={1200}
              height={600}
              className="w-full h-[400.06px] object-cover opacity-90"
            />
            <div className="absolute bottom-0 p-6 bg-gradient-to-t from-black via-black/50 to-transparent text-white w-full">
              <span className="bg-purple-700 text-xs px-3 py-1 rounded  bg-[#8256FF]">
                Technology
              </span>
              <h2 className="text-2xl font-bold mt-2">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h2>
              <div className="text-sm mt-1 flex items-center gap-2 text-white pt-2">
                <span className="inline-flex items-center gap-1">
                  <span className="bg-white rounded-full p-1">
                    {" "}
                    <User color="black" size={16} />
                  </span>{" "}
                  Tracey Wilson
                </span>{" "}
                • August 20, 2022
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col justify-center items-center gap-6 px-4 max-w-6xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogItems.map((item) => (
            <article
              key={item.id}
              className="relative bg-[#0f0f10] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow backdrop-blur-md bg-opacity-50"
            >
              <div className="absolute top-[40%] right-[30%] rounded-full w-20 h-20 bg-[#8256FF] opacity-50 blur-lg z-[-5]"></div>

              <Image
                src={item.imageUrl}
                alt={item.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-[#A5AEC0] mt-2">
                  {item.description}
                </p>
                <Link
                  href={`/blog/${item.id}`}
                  className="inline-block mt-4 text-[#7A7A7A] hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <Link
          href="/blog/all"
          className="border px-6 py-2 mx-auto rounded text-[#696A75] hover:bg-white hover:text-black transition"
        >
          View All Posts
        </Link>
        <div className="absolute -right-0 -bottom-[20%] xl:-right-[15%] hidden md:flex items-center justify-center -z-[5]">
          <Image
            src="/glow-bg.svg"
            alt="orbit"
            width={452}
            height={452}
            className="h-full w-full"
          />
        </div>
      </section>

      <section className="mt-16 bg-[#8256FF] rounded-lg text-white py-12 px-4 text-center max-w-5xl mx-auto bg-[url('/newsletter-bg.svg')] bg-cover bg-center bg-blend-multiply mb-16">
        <h4 className="text-base">Stay up to date</h4>
        <h2 className="text-2xl font-bold my-2 text-black">
          Join Our Newsletter
        </h2>
        <form
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 max-w-md mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
            placeholder="Enter your email.."
            className="px-4 py-2 w-full rounded bg-white text-black"
            required
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        <p className="text-white/70 mt-2">You can unsubscribe anytime</p>
      </section>
      <Footer />
    </main>
  );
}
