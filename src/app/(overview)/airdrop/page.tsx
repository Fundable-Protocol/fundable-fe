
import CreateCampaign from "@/components/airdrop/CreateCampaign";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Airdrop Campaign | Fundable",
    description: "Create a new token airdrop campaign on Fundable",
};

export default function AirdropPage() {
    return (
        <div className="w-full">
            <CreateCampaign />
        </div>
    )
}