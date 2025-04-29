import { streamData } from "@/lib/StreamData"
import { Trash } from "lucide-react"






export default function PaymentStreamManagementTable( ) {
    return ( <table>
         <thead>
<tr>
    <th className="w-[130px] h-[72px] text-center bg-[#21163F] p-[10px]  " >Stream ID</th>
    <th   className="w-[150px] h-[72px] text-center bg-[#1E212F] p-[10px] " >Recipient Address</th>
    <th  className="w-[142px] h-[72px] text-center bg-[#1E212F] p-[10px] ">Amount Per Second</th>
    <th className="w-[120px] h-[72px] text-center bg-[#1E212F] p-[10px] ">Start Date</th>
    <th className="w-[120px] h-[72px] text-center bg-[#1E212F] p-[10px] ">End Date</th>
    <th className="w-[120px] h-[72px] text-center bg-[#1E212F] p-[10px]">Token</th>
    <th className="w-[180px] h-[72px] text-center bg-[#1E212F] p-[10px]">Status</th>
    <th className="w-[150px] h-[72px] text-center bg-[#1E212F] p-[10px]">Action</th>
</tr>
</thead>

<tbody>
    {streamData.map((stream, index) => {

        const truncatedAddress = stream.recipient.slice(0, 6) + "......" + stream.recipient.slice(streamData.length - 3,  streamData.length)


        return (
            <tr key={index}>
                <td className="text-center h-[72px] bg-[#21163F] border-t-[1px] border-b-[1px] border-[#CDCDCD0D] p-[10px] "  > {index + 1} </td>
                <td className="text-center h-[72px] border-t-[1px] border-b-[1px] border-[#CDCDCD]/20 bg-[#1E212F] p-[10px]" > {truncatedAddress} </td>
                <td className="text-center h-[72px]  border-t-[1px] border-b-[1px] border-[#CDCDCD0D]/20 bg-[#1E212F] p-[10px]"  > {stream.amountPerSecond} </td>
                <td className="text-center  h-[72px] border-t-[1px] border-b-[1px] border-[#CDCDCD0D]/20 bg-[#1E212F] p-[10px]" > {stream.startDate} </td>
                <td className="text-center h-[72px]  border-t-[1px] border-b-[1px] border-[#CDCDCD0D]/20 bg-[#1E212F] p-[10px]" > {stream.endDate} </td>
                <td className="text-center h-[72px]  border-t-[1px] border-b-[1px] border-[#CDCDCD0D]/20 bg-[#1E212F] p-[10px]" > {stream.token} </td>
                <td className="text-center h-[72px] border-t-[1px] border-b-[1px] border-[#CDCDCD0D]/20 bg-[#1E212F] p-[10px]" > {stream.status} </td>

                <td className="flex items-center h-[72px] justify-between gap-5 border-t-[1px] border-b-[1px] border-[#CDCDCD0D]/20 bg-[#1E212F] p-[10px] " >
                    <button><Trash/></button>
                    <button><Trash/></button>
                    <button><Trash/></button>
                </td>

            </tr>
        )
    })}

</tbody>


    </table>
    )
}