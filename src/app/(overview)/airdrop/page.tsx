
import CreateCampaign from "@/components/airdrop/CreateCampain";
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