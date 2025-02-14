"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import IconArgent from "../../../public/imgs/IconArgent.svg";
import IconStarknet from "../../../public/imgs/IconStarknet.svg";
import IconMetamask from "../../../public/imgs/IconMetamask.svg";
import IconBravaas from "../../../public/imgs/IconBravaas.svg";
import IconOkk from "../../../public/imgs/IconOkk.svg";
import { Fragment } from "react";

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
      <div className="flex overflow-hidden">
        <motion.div
          animate={{
            x: "-50%",
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex flex-none gap-12 md:gap-24"
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <Fragment key={i}>
              {logos.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.image}
                  alt={logo.alt}
                  width={152}
                  height={48}
                  priority
                />
              ))}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
