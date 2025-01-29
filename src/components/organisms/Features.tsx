import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Features() {
  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center lg:text-left max-w-[250px] mx-auto md:max-w-[350px] lg:max-w-0 lg:max-w-none">
            Decentralized Funding Made Easy
          </h1>
          <p className="text-sm text-[#CCCCCC] text-center  lg:text-right font-light">
            Fundable: Decentralized funding for retroactive, quadratic, and
            giveaway distributions, streamlining complex payments.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Retroactive Funding */}
          <Card className="bg-[#0A0A0A] border-gray-800 relative">
            {" "}
            <CardContent className="pt-6 pr-0">
              {" "}
              <div>
                {" "}
                <h2 className="text-base font-semibold text-[#eaeaea]">
                  {" "}
                  Retroactive Funding{" "}
                </h2>
                <p className="text-[#A5AEC0] text-sm leading-relaxed mt-4">
                  Description: Reward contributors for their past work and
                  achievements, fostering a sense of appreciation and motivating
                  continued contributions.
                </p>
                {/* READ MORE AND IMAGE SECTION */}
                <div className="flex justify-between items-start gap-16 mt-4">
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm hover:text-purple-400 transition-colors text-[#E1E4EA] w-[200px]"
                  >
                    Read more
                    <Image
                      src="/rightArrowFu.svg"
                      alt="right arrow"
                      width={16}
                      height={16}
                      className="ml-1"
                    />
                  </Link>

                  <div className="relative h-44 w-full ">
                    <Image
                      src="/retro.svg"
                      alt="Geometric cube illustration"
                      className="absolute bottom-0 right-0 object-cover rounded-lg"
                      width={325}
                      height={184}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <div className="absolute top-0 left-[50%] transform -translate-x-1/2">
              <img src="/topShade.svg" alt="" />
            </div>
            <div className="absolute top-[50%] left-0 transform -translate-y-1/2">
              <img src="/leftShade.svg" alt="" />
            </div>
          </Card>

          {/* Quadratic Funding */}
          <Card className="bg-[#0A0A0A] border-gray-800 relative">
            {" "}
            <CardContent className="pt-6 pr-0">
              {" "}
              <div>
                {" "}
                <h2 className="text-base font-semibold text-[#eaeaea]">
                  {" "}
                  Quadratic Funding{" "}
                </h2>
                <p className="text-[#A5AEC0] text-sm leading-relaxed mt-4">
                  Amplify the impact of small contributions, create a more
                  inclusive funding model, and ensure that every voice is heard.
                </p>
                {/* READ MORE AND IMAGE SECTION */}
                <div className="flex justify-between items-start gap-16 mt-4">
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm hover:text-purple-400 transition-colors text-[#E1E4EA] w-[200px]"
                  >
                    Read more
                    <Image
                      src="/rightArrowFu.svg"
                      alt="right arrow"
                      width={16}
                      height={16}
                      className="ml-1"
                    />
                  </Link>

                  <div className="relative h-44 w-full ">
                    <Image
                      src="/quadratic.svg"
                      alt="Geometric cube illustration"
                      className="absolute bottom-0 right-0 object-cover rounded-lg"
                      width={325}
                      height={184}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <div className="absolute top-0 left-[50%] transform -translate-x-1/2">
              <img src="/topShade.svg" alt="" />
            </div>
            <div className="absolute top-[50%] left-0 transform -translate-y-1/2">
              <img src="/leftShade.svg" alt="" />
            </div>
          </Card>
        </div>

        <div className="w-full flex gap-6 flex-col lg:flex-row mt-6">
          {/* Streaming */}
          <div className="lg:w-[60%] w-full">
            <Card className=" bg-[#8256FF] border-none text-[#eaeaea]">
              <CardContent className="p-6">
                <div className="space-y-4 max-w-2xl">
                  <h2 className="text-base font-semibold">Streaming</h2>
                  <p
                    className="
                   text-sm leading-relaxed 
                  
                  "
                  >
                    Streamline your payment workflows with automated solutions
                    for recurring payments, salaries, subscriptions, and more,
                    reducing administrative burdens and minimizing errors.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm hover:text-purple-400 transition-colors text-[#E1E4EA] w-[200px]"
                  >
                    Read more
                    <Image
                      src="/rightArrowFu.svg"
                      alt="right arrow"
                      width={16}
                      height={16}
                      className="ml-1"
                    />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Airdrops */}
          <div className="lg:w-[40%] w-full">
            <Card className=" bg-[#0A0A0A] border-gray-800 relative">
              <CardContent className="p-6">
                <div className="space-y-4 text-[#eaeaea]">
                  <h2 className="text-base  font-semibold">Airdrops</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Effortlessly distribute funds to recipients, with complete
                    transparency, robust security, and real-time tracking.
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm hover:text-purple-400 transition-colors text-[#E1E4EA] w-[200px]"
                  >
                    Read more
                    <Image
                      src="/rightArrowFu.svg"
                      alt="right arrow"
                      width={16}
                      height={16}
                      className="ml-1"
                    />
                  </Link>
                </div>
              </CardContent>

              <div className="absolute top-0 left-[50%] transform -translate-x-1/2">
                <img src="/topShade.svg" alt="" />
              </div>
              <div className="absolute top-[50%] left-0 transform -translate-y-1/2">
                <img src="/leftShade.svg" alt="" />
              </div>
              <div className="absolute right-[-10%] top-[-10%] hidden lg:block">
                <img src="/imgs/solar.png" alt="" className="" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
