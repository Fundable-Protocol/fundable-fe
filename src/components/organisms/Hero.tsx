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
    // max-w-5xl mx-auto
    <header className="w-full py-12 md:py-24">
      <div className="flex flex-col justify-center items-center space-y-4 text-center">
        <h1 className="text-white text-4xl md:text-8xl font-bric font-bold font-syne text-center">
          Refining automated <br /> payments in Web3
        </h1>

        <p className="text-[#DADADA] max-w-xl mx-auto md:max-w-3xl md:text-xl ">
          {heroText.text}
        </p>
      </div>

      <div className="space-y-4 mb-4">
        <div className="flex justify-center items-center relative">
          <div className="absolute space-x-4 md:space-x-8 md:top-40">
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

          <div className="absolute bg-black hidden md:block h:8 md:h-32 w-full bottom-0" />
        </div>
      </div>

      <LogoCloud />
    </header>
  );
};

export default Hero;
