import Image from "next/image";

export default function LogoCloud() {
  return (
    <div className="bg-transparent pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-4 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-5 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="argent logo"
            src="/imgs/IconArgent.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="starknet logo"
            src="/imgs/IconStarknet.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Metamask"
            src="/imgs/IconMetamask.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Bravaas logo"
            src="/imgs/IconBravaas.svg"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Okk logo"
            src="/imgs/IconOkk.svg"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}
