import PaymentStreamManagementTable from "@/components/organisms/PaymentStreamManagementTable";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";



const PaymentStreamComponent = () => {
  return <div className="p-4 font-urbanist">
  <div className="  w-full h-full flex flex-col items-start gap-2" >
    <h1 className="text-base  text-[#E1E4EA] font-semibold " >Payment streams</h1>
    <hr className="border-[#2A2E41] border-[2px] w-full mt-[30px]  " />

    <div className="w-full flex flex-col items-start "  >
    <Button  className="self-end rounded-t-xl px-[18px] py-[14px] bg-[#242838] border-[2px] border-[#2A2E41] "  variant={"outline"} > <PlusIcon/>  <span> New Campaign</span></Button>
    <hr className="border-[#2A2E41] border-[2px] w-full  " />
    </div>


    <div className="w-full overflow-x-auto min-w-sm py-3  flex items-center justify-center"  >
      <PaymentStreamManagementTable  />
    </div>




    </div>
    </div>;
};

export default PaymentStreamComponent;
