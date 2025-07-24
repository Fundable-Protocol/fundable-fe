"use client";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const tokens = [
  { value: "usdc", label: "USDC" },
  { value: "usdt", label: "USDT" },
  { value: "dai", label: "DAI" },
  { value: "eth", label: "ETH" },
];

export function TokenSelect() {
  return (
    <div className="relative w-full">
      <Select>
        <SelectTrigger className="w-full rounded-md bg-utility-input px-3 py-5 h-auto placeholder:text-base placeholder:font-medium placeholder:text-utility-placeholder focus:outline-none border-0 focus:ring-0 focus:ring-offset-0">
          <div className="flex items-center gap-3">
            <div className="h-[26px] w-[24px] rounded-[13px] bg-utility-tokenBg"></div>
            <SelectValue placeholder="Choose a token..." />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tokens</SelectLabel>
            {tokens.map((token) => (
              <SelectItem key={token.value} value={token.value}>
                {token.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <div className="rounded bg-utility-tokenBg px-[10px] py-[8.5px] text-base font-medium text-utility-label">
          Choose
        </div>
      </div>
    </div>
  );
}