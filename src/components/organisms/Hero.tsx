import Link from "next/link";
import Image from "next/image";

import { Button } from "../ui/button";
import LogoCloud from "../molecules/LogoCloud";
import HeroImg from "../../../public/imgs/fundableHero.svg";

const Hero = () => {
  const heroText = {
    h1Label: "Refining automated payments in Web3",
    text: "One stop solution for subscriptions, giveaways, salaries, SIPs and more automated payments in web3.",
  };

  return (
    <header className="w-full bg-black px-8 xl:px-0 pt-24 md:max-w-full mx-auto">
      <div className="flex flex-col justify-center items-center space-y-4 text-center max-w-5xl mx-auto">
        <h1 className="text-white text-5xl md:text-[5rem] font-bric font-bold font-syne text-center">
          {heroText.h1Label}
        </h1>

        <p className="text-[#DADADA] max-w-xl mx-auto md:max-w-3xl md:text-xl ">
          {heroText.text}
        </p>
      </div>

      <div className="space-y-4 mb-4">
        <div className="flex justify-center items-center gap-x-4 relative">
          <div className="absolute space-x-4">
            <Link href="/distribute" className="z-10">
              <Button className="bg-purple">Get Started</Button>
            </Link>

            <Link href="#" className="z-10">
              <Button variant="secondary" className="bg-gray_purple text-white">
                Discover More
              </Button>
            </Link>
          </div>

          <Image src={HeroImg} alt="fundable hero icon" priority />
        </div>
      </div>
      <LogoCloud />
    </header>
  );
};

export default Hero;
