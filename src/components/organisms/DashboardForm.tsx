"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { AddressTable } from "@/components/organisms/AddressTable";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";
import UploadIcon from "@/svg/UploadIcon";

export function DistributionForm() {
  const [distributionType, setDistributionType] = useState<
    "equal" | "weighted"
  >("equal");
  const [addresses, setAddresses] = useState<
    { address: string; amount: string }[]
  >([
    { address: "Address", amount: "Amount" },
    { address: "Address", amount: "Amount" },
    { address: "Address", amount: "Amount" },
  ]);
  const [isDragging, setIsDragging] = useState(false);
  const [, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const processFile = (file: File) => {
    setFileName(file.name);

    // Parse CSV file
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      if (text) {
        const rows = text.split("\n");
        const newAddresses = rows
          .filter((row) => row.trim() !== "")
          .map((row) => {
            const [address, amount] = row.split(",").map((item) => item.trim());
            return {
              address: address || "Address",
              amount: amount || "Amount",
            };
          });

        if (newAddresses.length > 0) {
          setAddresses(newAddresses);
        }
      }
    };
    reader.readAsText(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const handleAddRow = () => {
    setAddresses([...addresses, { address: "Address", amount: "Amount" }]);
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  // Handle clicks outside the dropzone
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropZoneRef.current &&
        !dropZoneRef.current.contains(event.target as Node)
      ) {
        setIsDragging(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#151718] rounded-lg border border-[#2A2E41] overflow-hidden">
      <div className="p-4 border-b border-[#2A2E41]">
        <h2 className="text-lg font-medium text-white">Credits Distribution</h2>
      </div>

      <div className="p-4 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Token selection */}
          <div className="space-y-2">
            <Label htmlFor="token" className="text-sm text-white">
              Token
            </Label>
            <Select defaultValue="strk">
              <SelectTrigger
                id="token"
                className="bg-[#1E212F] border-none text-white h-10 rounded-md"
              >
                <SelectValue placeholder="Select token" />
              </SelectTrigger>
              <SelectContent className="bg-[#1E212F] border-[#2A2A2A]">
                <SelectItem value="strk">STRK</SelectItem>
                <SelectItem value="eth">ETH</SelectItem>
                <SelectItem value="usdc">USDC</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Distribution type */}
          <div className="flex items-end justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between w-fit gap-7">
                <Label className="text-sm text-white">Distribution Type</Label>
                <div className="flex items-center gap-1">
                  <Info size={16} className="text-white" />
                </div>
              </div>
              <div className="flex items-center justify-between bg-[#1E212F] p-2 px-5 rounded-md h-10 w-fit">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Label
                      htmlFor="equal"
                      className={`cursor-pointer text-sm ${distributionType === "equal"
                          ? "text-white"
                          : "text-gray-400"
                        }`}
                    >
                      Equal
                    </Label>
                    <Switch
                      id="equal"
                      checked={distributionType === "weighted"}
                      onCheckedChange={(checked) =>
                        setDistributionType(checked ? "weighted" : "equal")
                      }
                      className="data-[state=checked]:bg-[#7F3DFF]"
                    />
                    <Label
                      htmlFor="weighted"
                      className={`cursor-pointer text-sm ${distributionType === "weighted"
                          ? "text-white"
                          : "text-gray-400"
                        }`}
                    >
                      Weighted
                    </Label>
                  </div>
                </div>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-[#1F8E8E] via-[#440495] to-[#B102CD] hover:opacity-90 hover:text-white rounded-full w-fit">
              Distribute Token
            </Button>
          </div>
        </div>

        {/* File upload area */}
        <div
          ref={dropZoneRef}
          className={cn(
            "border-2 border-dashed rounded-md p-8 transition-colors duration-200 min-h-[222px]",
            isDragging ? "border-[#7F3DFF] bg-[#1A1A1A]/50" : "border-[#DEE2E6]"
          )}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <div onClick={handleBrowseClick}>
              {/* <Upload className="h-6 w-6 text-gray-400" /> */}
              <UploadIcon />
            </div>
            <h3 className="text-xl font-semibold mb-1 text-white">
              Drag and drop a CSV file here, or click to select a file
            </h3>
            <p className="text-sm text-[#FFFFFF99] font-normal mb-4">
              CSV format: address, amount (one per line)
            </p>
            <input
              type="file"
              accept=".csv"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileUpload}
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            variant="default"
            className="bg-gradient-to-r from-[#1F8E8E] via-[#440495] to-[#B102CD] hover:opacity-90 hover:text-white rounded-full"
            onClick={handleAddRow}
          >
            Add Row
          </Button>
        </div>
        {/* Address table */}
        <AddressTable addresses={addresses} setAddresses={setAddresses} />

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-end gap-3">
          <Button className="bg-gradient-to-r from-[#1F8E8E] via-[#440495] to-[#B102CD] hover:opacity-90 hover:text-white rounded-full w-full">
            Distribute Token
          </Button>
        </div>
      </div>
    </div>
  );
}
