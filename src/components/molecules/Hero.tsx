import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import LogoCloud from "../molecules/LogoCloud";

const Hero = () => {
  const heroText = {
    h1Label: "Refining automated payments in Web3",
    text: "Streamline your funding operations with Fundable's comprehensive platform, featuring automated payments, retroactive funding, quadratic funding, and giveaway distribution – all in one intuitive interface.",
  };

  return (
    <header className="w-full bg-black rounded-xl px-8 xl:px-0">
      <div className="flex justify-center items-center pt-24 xl:pb-0 flex-col text-balance -mb-10">
        <div className="md:max-w-4xl text-center space-y-4">
          <h1 className="text-white text-5xl md:text-[4rem]  font-bric font-bold font-syne">
            {heroText.h1Label}
          </h1>

          <div className="space-y-6">
            <p className="text-[#DADADA] max-w-xl md:max-w-[90%] mx-auto md:text-base font-urbanist">
              {heroText.text}
            </p>

            <div className="flex justify-center items-center gap-x-4  relative  h-[350px] ">
              <Link href="/dashboard" className=" z-10">
                <Button className="bg-purple">Get Started</Button>
              </Link>

              <Link href="#" className="z-10">
                <Button
                  variant="secondary"
                  className="bg-gray_purple text-white"
                >
                  Discover More
                </Button>
              </Link>

              <div className="absolute -top-5-0">
                <Image
                  src="/imgs/fundableHero.svg"
                  alt="fundable hero icon"
                  width={1000}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <LogoCloud />
    </header>
  );
};

export default Hero;
