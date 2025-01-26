import Link from "next/link";
import Image from "next/image";

import ConnectWalletButton from "@/components/atoms/Button";
import Logo from "../../../public/imgs/fundable_logo.png";

const Navbar = async () => {
  // md:pr-10 md:pl-12

  const links = [
    { title: "Solutions", url: "#" },
    { title: "Resources", url: "#" },
    { title: "About", url: "#" },
  ];
  return (
    <nav className="flex justify-between items-center py-4 text-sm font-bold text-txt container">
      <Link href="/" className="relative w-28 h-5">
        <Image
          priority
          alt="logo"
          fill
          src={Logo}
          className="w-auto h-auto object-contain"
        />
      </Link>

      <div className="flex gap-x-16">
        {links.map((link) => (
          <Link href={link.url} className="text-white" key={link.title}>
            {link.title}
          </Link>
        ))}
      </div>

      <ConnectWalletButton />
    </nav>
  );
};

export default Navbar;
