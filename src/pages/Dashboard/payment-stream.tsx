"use client"

import PaymentStreamManagementTable from "@/components/organisms/PaymentStreamManagementTable";
import { Button } from "@/components/ui/button";
import { streamData } from "@/lib/StreamData";
import { PlusIcon } from "lucide-react";
import { useState } from "react";



const PaymentStreamComponent = () => {



  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const totalItems = streamData.length || 0;
const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }


  return <div className="p-4 font-urbanist">
    <div className="  w-full h-full flex flex-col items-start gap-2" >
      <h1 className="text-base  text-[#E1E4EA] font-semibold " >Payment streams</h1>
      <hr className="border-[#2A2E41] border-[2px] w-full mt-[30px]  " />

      <div className="w-full flex flex-col items-start "  >
        <Button className="self-end rounded-sm px-2 md:px-[18px] py-2 md:py-[14px] bg-[#242838] border-[2px] border-[#2A2E41] gap-3 text-sm md:text-base font-semibold  " variant={"outline"}   aria-label="Create new payment stream campaign" > <PlusIcon />  <span> New Campaign</span></Button>
        <hr className="border-[#2A2E41] border-[2px] w-full  " />
      </div>


      <div className="w-full flex items-center flex-col justify-center mx-auto "  >
        <PaymentStreamManagementTable indexOfLastItem={indexOfLastItem} indexOfFirstItem={indexOfFirstItem} />
        <div className="w-full flex items-center justify-between px-6 " >


          <h4 className=" text-[#D9D9D980] font-normal text-sm "  >Page {currentPage} of  {totalPages} </h4>



          <div className="flex items-center justify-center gap-3 py-4 "  >
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              variant={"outline"} className="px-4 py-[6px] rounded font-medium text-base disabled:opacity-50 " >Previous</Button>
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages }
              variant={"outline"} className="px-4 py-[6px] rounded font-medium text-base ">Next</Button>
          </div>

        </div>
      </div>




    </div>


  </div>;
};

export default PaymentStreamComponent;
