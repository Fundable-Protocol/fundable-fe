"use client";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SwitchSelectProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  label: string;
}

export function SwitchSelect({ value, onValueChange, label }: SwitchSelectProps) {
  const handleValueChange = (selectedValue: string) => {
    onValueChange(selectedValue === "on");
  };

  return (
    <Select onValueChange={handleValueChange} value={value ? "on" : "off"}>
      <SelectTrigger className="w-full rounded-md bg-utility-input px-3 py-5 h-auto placeholder:text-base placeholder:font-medium placeholder:text-utility-placeholder focus:outline-none border-0 focus:ring-0 focus:ring-offset-0">
        <SelectValue>
            {`${label}(${value ? "on" : "off"})`}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="on">On</SelectItem>
          <SelectItem value="off">Off</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}