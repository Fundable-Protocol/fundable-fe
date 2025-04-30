"use client"

import { dateFormatter } from "@/lib/DateFormatter"
import { streamData } from "@/lib/StreamData"
import { EllipsisVertical } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface props {
    indexOfFirstItem: number;
    indexOfLastItem: number;
}




export default function PaymentStreamManagementTable({ indexOfFirstItem, indexOfLastItem }: props) {
    const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);




    const toggleShowMenu = (index: number) => {
        setOpenMenuIndex((prevIndex) => (prevIndex === index ? null : index));
    };





    return (
        <div className="bg-[#1E212F]  pr-4 rounded-xl  w-full max-w-[370px] md:max-w-[550px]  lg:max-w-fit overflow-x-auto min-w-sm " >


            <table>
                <thead>
                    <tr>
                        <th className="min-w-[80px] w-[130px] h-[72px] text-center bg-[#21163F] p-[10px] text-xs  md:text-base font-bold text-[#E1E1E1]  " >Stream ID</th>
                        <th className=" min-w-[110px] w-[150px] h-[72px] text-center bg-[#1E212F] p-[10px] text-xs  md:text-base font-bold text-[#E1E1E1] " >Recipient Address</th>
                        <th className="min-w-[102px] w-[142px] h-[72px] text-center bg-[#1E212F] p-[10px] text-xs  md:text-base font-bold text-[#E1E1E1]">Amount Per Second</th>
                        <th className="min-w-[80px] w-[120px] h-[72px] text-center bg-[#1E212F] p-[10px] text-xs  md:text-base font-bold text-[#E1E1E1]">Start Date</th>
                        <th className="min-w-[80px] w-[120px] h-[72px] text-center bg-[#1E212F] p-[10px] text-xs  md:text-base font-bold text-[#E1E1E1]">End Date</th>
                        <th className="min-w-[80px] w-[120px] h-[72px] text-center bg-[#1E212F] p-[10px] text-xs  md:text-base font-bold text-[#E1E1E1]">Token</th>
                        <th className="min-w-[140px] w-[180px] h-[72px] text-center bg-[#1E212F] p-[10px] text-xs  md:text-base font-bold text-[#E1E1E1]">Status</th>
                        <th className="min-w-[140px] w-[150px] h-[72px] text-center bg-[#1E212F] p-[10px] text-xs  md:text-base font-bold text-[#E1E1E1]">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {streamData.slice(indexOfFirstItem, indexOfLastItem).map((stream, index) => {

                        const truncatedAddress = stream.recipient.slice(0, 6) + "......" + stream.recipient.slice(streamData.length - 3, streamData.length)

                        const tokenImageMap = {
                            "XLM": "/images/xlm.svg",
                            "TON": "/images/ton.svg",
                            "ETH": "/images/eth.svg",
                            "STRK": "/images/starknet.svg"
                        };

                        const tokenImage = () => {
                            return tokenImageMap[stream.token as keyof typeof tokenImageMap] || "/images/starknet.svg";
                        }


                        const formattedStartDate = dateFormatter(new Date(stream.startDate));
                        const formattedEndDate = dateFormatter(new Date(stream.endDate));



                        return (
                            <tr key={index} className="border-t-[2px] border-b-[1px] border-[#CDCDCD0D]"   >
                                <td className="text-center h-[72px] bg-[#21163F]  p-[10px] text-[#E1E1E1] text-xs md:text-base font-normal "  > {index + 1} </td>
                                <td className="text-center h-[72px]  bg-[#1E212F] p-[10px] text-[#E1E1E1] text-xs md:text-base font-normal" > {truncatedAddress} </td>
                                <td className="text-center h-[72px]   bg-[#1E212F] p-[10px] text-[#E1E1E1] text-xs md:text-base font-normal"  > {stream.amountPerSecond} </td>
                                <td className="text-center  h-[72px]  bg-[#1E212F] p-[10px] text-[#E1E1E1] text-xs md:text-base font-normal" > {formattedStartDate} </td>
                                <td className="text-center h-[72px]  bg-[#1E212F] p-[10px] text-[#E1E1E1] text-xs md:text-base font-normal" > {formattedEndDate} </td>
                                <td className="text-center h-[72px]   bg-[#1E212F] p-[10px]" > <span className="flex items-center justify-center gap-[10px] mx-auto text-[#E1E1E1] text-xs md:text-base font-normal" >
                                    <Image src={tokenImage()} alt={`${stream.token} token `} height={32} width={32} className=" w-4 h-4  md:w-8 md:h-8 " />  {stream.token} </span> </td>
                                <td className="text-center h-[72px]  bg-[#1E212F] p-[10px]  text-xs md:text-base font-normal" >

                                    <span
                                        className={`py-[6px] px-[8px] block text-center rounded-lg border-[1px] w-fit self-center min-w-[64px] mx-auto
           ${stream.status === "Active" ? "bg-[#F4FBF6] border-[#2B9A66] text-[#2B9A66]" :
                                                stream.status === "Completed" ? "bg-[#F4FBF6] border-[#2B9A66] text-[#2B9A66]" :
                                                    stream.status === "Paused" ? "bg-[#F4FBF6] text-[#DC3E42] border-[#FFDBDC]" :
                                                        "bg-[#F4FBF6] text-[#DC3E42] border-[#FFDBDC]"}`} >
                                        {stream.status}
                                    </span>
                                </td>

                                <td className="flex items-center h-[72px] justify-center gap-[20px]  bg-[#1E212F] p-[10px]  " >
                                    <div className={`  overflow-hidden flex items-center justify-between gap-[20px] transition-all duration-150 ease-in-out ${openMenuIndex === index ? " w-[50px]" : "w-0"} `}  >
                                        <button onClick={() => setOpenMenuIndex(null)} > <Image src={"/Edit.svg"} alt="edit button" height={24} width={24} /> </button>
                                        <button onClick={() => setOpenMenuIndex(null)} ><Image src={"/delete.svg"} alt="edit button" height={24} width={24} /></button>
                                    </div>
                                    <button onClick={() => toggleShowMenu(index)}><EllipsisVertical color="white" size={24} className={` transform  transition-all duration-150 ease-in-out   ${openMenuIndex === index ? "rotate-[180deg] " : "rotate-0"} `} /></button>
                                </td>

                            </tr>
                        )
                    })}

                </tbody>


            </table>
        </div>
    )
}