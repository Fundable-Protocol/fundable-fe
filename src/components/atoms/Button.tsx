"use client";

import { FC } from "react";

import { Button } from "../ui/button";
import Link from "next/link";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
}

const ConnectWalletButton: FC<ButtonProps> = ({ className }) => {
  return (
    <>
      <Link href="/distribute">
        <Button variant="gradient" className={className}>
          Launch App
        </Button>
      </Link>
    </>
  );
};

export default ConnectWalletButton;
