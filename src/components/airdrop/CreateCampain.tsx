"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { UploadCloud, Download, Lock, CircleHelp, } from "lucide-react";
import { Textarea } from "../ui/text-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./Select";
import { cn } from "@/lib/utils";

const CreateCampaign = () => {
    const [selectedChain, setSelectedChain] = useState<string>("");
    const [selectedToken, setSelectedToken] = useState<string>("");
    const [claimDeadlineEnabled, setClaimDeadlineEnabled] = useState<boolean>(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [campaignName, setCampaignName] = useState<string>("");
    const [campaignDetails, setCampaignDetails] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement>(null);


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setSelectedFile(e.dataTransfer.files[0]);
        }
    };

    const handleClickFileUpload = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="bg-black w-full min-h-screen text-white p-6 flex justify-center">
            <div className="w-full">

                <div className="bg-zinc-900 rounded-lg p-6 mb-6">
                    <h1 className="text-base text-[#E1E4EA] font-semibold mb-6">Create Campaign</h1>

                    <hr className="border border-[#2A2E41] my-3" />
                    <p className="text-sm text-[#8792AB] mb-8">
                        Each stream will start vesting only when the recipient claims it from the onstream campaign. All streams will have
                        the same vesting period, permissions, and distribution mechanics. For example, linear streams are distributed on a
                        constant rate per second. Click here to learn more about how token distribution works in Fundable.
                    </p>

                    <hr className="border border-[#2A2E41] my-3" />
                    <h2 className="text-base py-2">Campaign details</h2>
                    <hr className="border border-[#2A2E41] my-3" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <Label className="text-[#8792AB] mb-2 block">Chain</Label>
                            <Select onValueChange={setSelectedChain} value={selectedChain}>
                                <SelectTrigger className="w-full border-none h-12">
                                    <SelectValue placeholder="Choose a chain from the list" />
                                </SelectTrigger>
                                <SelectContent className="bg-zinc-800 border-zinc-700">
                                    <SelectItem value="ethereum">Ethereum</SelectItem>
                                    <SelectItem value="polygon">Polygon</SelectItem>
                                    <SelectItem value="arbitrum">Arbitrum</SelectItem>
                                    <SelectItem value="optimism">Optimism</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label className="text-[#8792AB] mb-2 block">Token</Label>
                            <Select onValueChange={setSelectedToken} value={selectedToken}>
                                <SelectTrigger className="w-full border-none h-12">
                                    <SelectValue placeholder="Choose a token" />
                                </SelectTrigger>
                                <SelectContent className="bg-zinc-800 border-zinc-700">
                                    <SelectItem value="usdc">USDC</SelectItem>
                                    <SelectItem value="usdt">USDT</SelectItem>
                                    <SelectItem value="eth">ETH</SelectItem>
                                    <SelectItem value="wbtc">WBTC</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <Label className="text-[#8792AB] mb-2 block">Name</Label>
                            <Input
                                placeholder="Fill in the name of the campaign..."
                                className="bg-[#1E212F] border-none h-12"
                                value={campaignName}
                                onChange={(e) => setCampaignName(e.target.value)}
                            />
                        </div>

                        <div>
                            <div className="flex items-center gap-1 mb-2">
                                <Label className="text-[#8792AB]">Claim window ends on</Label>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div className="cursor-help">
                                                <CircleHelp size={18} className="text-[#8792AB]" />
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent className="bg-[#1E212F] text-white">
                                            <p>Set a deadline for recipients to claim their tokens</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>

                            <div className="flex items-center justify-around rounded-md bg-[#1E212F]">
                                <div className="flex-1 mr-4">
                                    <Input
                                        type="date"
                                        placeholder="Choose a date and time"
                                        className="bg-[#1E212F] border-none w-full flex justify-between h-12"
                                        disabled={!claimDeadlineEnabled}
                                    />
                                </div>

                                <div className="ml-4 flex items-center gap-2 p-3">
                                    <div className="flex bg-[#2A2B3C] rounded-md text-xs">
                                        <button
                                            onClick={() => setClaimDeadlineEnabled(true)}
                                            className={cn(
                                                "px-3 py-1 rounded-l-md",
                                                claimDeadlineEnabled ? "bg-[#3C425D] text-white" : "text-slate-400"
                                            )}
                                        >
                                            On
                                        </button>
                                        <button
                                            onClick={() => setClaimDeadlineEnabled(false)}
                                            className={cn(
                                                "px-3 py-1 rounded-r-md",
                                                !claimDeadlineEnabled ? "bg-[#3C425D] text-white" : "text-slate-400"
                                            )}
                                        >
                                            Off
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                    <div className="mb-6">
                        <Label className="text-[#E1E4EA] mb-2 block">Campaign Details</Label>
                        <Textarea
                            placeholder="Enter details that are importance for airdrop recipients"
                            className="bg-[#1E212F] border-none min-h-32 resize-none"
                            value={campaignDetails}
                            onChange={(e) => setCampaignDetails(e.target.value)}
                        />
                    </div>

                    <div
                        className="border-2 border-dashed border-[#DEE2E6] rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        onClick={handleClickFileUpload}
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                            accept=".csv"
                        />
                        <div className="bg-zinc-800 rounded-full p-3 mb-4">
                            <UploadCloud size={24} className="text-purple-500" />
                        </div>
                        <p className="text-white font-medium mb-1">Drag and drop a CSV file here, or click to select a file</p>
                        <p className="text-xs text-zinc-400">CSV format: address, amount (like per line)</p>
                        {selectedFile && (
                            <div className="mt-4 text-sm text-green-400">
                                Selected file: {selectedFile.name}
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex justify-end gap-4">
                    <Button variant="outline" className="border-2 rounded-md bg-[#242838] border-[#2A2E41] text-white hover:bg-zinc-800">
                        <Download size={16} className="mr-2" />
                        Save
                    </Button>
                    <Button className="rounded-md bg-purple-600 hover:bg-purple-700 bg-gradient-to-tr text-white"
                        style={{
                            backgroundImage:
                                'linear-gradient(to right, #1F8EBE, #440495, #B102CD)',
                        }}
                    >
                        Continue
                        <Lock size={16} className="ml-2" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CreateCampaign;