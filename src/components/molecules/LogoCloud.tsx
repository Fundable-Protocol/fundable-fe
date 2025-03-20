import Image from "next/image";

import IconOkk from "../../../public/marqueLogos/okxLogo.png";
import IconArgent from "../../../public/marqueLogos/argentX.png";
import IconBravaas from "../../../public/marqueLogos/bravoos.png";
import IconStarknet from "../../../public/marqueLogos/starknet.png";
import IconMetamask from "../../../public/marqueLogos/metamask.png";

export default function LogoCloud() {
  const logos = [
    {
      image: IconArgent,
      alt: "argent-logo",
    },
    {
      image: IconStarknet,
      alt: "starknet-logo",
    },
    {
      image: IconMetamask,
      alt: "metamask-logo",
    },
    {
      image: IconBravaas,
      alt: "bravaas-logo",
    },
    {
      image: IconOkk,
      alt: "okk-logo",
    },
  ];

  return (
    <div className=" pb-24 sm:pb-28 z-10 flex justify-between">
      {logos.map((logo, index) => (
        <Image
          key={index}
          src={logo.image}
          alt={logo.alt}
          width={150}
          height={80}
          priority
        />
      ))}
    </div>
  );
}
