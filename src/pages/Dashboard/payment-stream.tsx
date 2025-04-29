import PaymentStreamManagementTable from "@/components/organisms/PaymentStreamManagementTable";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";



const PaymentStreamComponent = () => {
  return <div className="p-4 font-urbanist">
    <div className="  w-full h-full flex flex-col items-start gap-2" >
      <h1 className="text-base  text-[#E1E4EA] font-semibold " >Payment streams</h1>
      <hr className="border-[#2A2E41] border-[2px] w-full mt-[30px]  " />

      <div className="w-full flex flex-col items-start "  >
        <Button className="self-end rounded-t-xl px-2 md:px-[18px] py-2 md:py-[14px] bg-[#242838] border-[2px] border-[#2A2E41] gap-3 text-sm md:text-base font-semibold  " variant={"outline"} > <PlusIcon />  <span> New Campaign</span></Button>
        <hr className="border-[#2A2E41] border-[2px] w-full  " />
      </div>


      <div className="w-full flex items-center flex-col justify-center mx-auto "  >
        <PaymentStreamManagementTable />
        <div className="w-full flex items-center justify-between px-6 " >


          <h4 className=" text-[#D9D9D980] font-normal text-sm "  >Page 1 of 2</h4>



          <div className="flex items-center justify-center gap-3 py-4 "  >
            <Button variant={"outline"} className="px-4 py-[6px] rounded font-medium text-base " >Previous</Button>
            <Button variant={"outline"} className="px-4 py-[6px] rounded font-medium text-base ">Next</Button>
          </div>

        </div>
      </div>




    </div>


  </div>;
};

export default PaymentStreamComponent;
