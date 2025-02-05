import Image from "next/image";
import IconArgent from '../../../public/imgs/IconArgent.svg'
import IconStarknet from '../../../public/imgs/IconStarknet.svg'
import IconMetamask from '../../../public/imgs/IconMetamask.svg'
import IconBravaas from '../../../public/imgs/IconBravaas.svg'
import IconOkk from '../../../public/imgs/IconOkk.svg'


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
    <div className="bg-transparent pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-4 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-5 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((logo, index) => (
            <Image key={index} src={logo.image} alt={logo.alt} width={152} height={48} />
          ))}
        </div>
      </div>
    </div>
  );
}
