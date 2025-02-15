"use client"
import BlogCarousel from "../molecules/BlogCarousel";
import Image from "next/image";
import orbit from "../../../public/orbit.svg"
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";


const Blog = () => {
  const [api, setApi] = useState<any>(null);

  const handlePrev = () => api?.scrollPrev();
  const handleNext = () => api?.scrollNext();


  return (
    <section className="relative text-white w-full flex items-center justify-center flex-col gap-4  px-4 md:pb-[13%]  overflow-hidden  ">
      <header className=" w-full max-w-[1172px] flex items-center justify-between  font-syne mx-auto md:ml-auto pr-[5%] mb-[2%] ">
        <h1 className="max-w-[504px] font-bold text-[30px] md:text-[42px] leading-[30px] md:leading-[47.88px] ">
          Read From <br /> Our Blog
        </h1>

        <div className="flex flex-row items-center gap-3 ">


          <button onClick={handlePrev} 
  className="bg-transparent cursor-pointer flex items-center justify-center w-[47.88px] h-[47.88px] text-[24px] text-[#4A4949] border-4 border-[#4A4949] hover:border-[#ffffff] hover:text-[#ffffff] transition-all duration-300 ease-in-out rounded-full ">
            <ArrowLeft  />
          </button>

          <button  onClick={handleNext}    className="bg-transparent cursor-pointer flex items-center justify-center w-[47.88px] h-[47.88px] text-[24px] text-[#4A4949] border-4 border-[#4A4949] hover:border-[#ffffff] hover:text-[#ffffff] transition-all duration-300 ease-in-out rounded-full ">
            <ArrowRight />
          </button>

        </div>
      </header>

      <BlogCarousel setApi={setApi} />



<div className="absolute bottom-0 right-[5%] w-[557.68px] h-[403.88px] hidden md:flex items-center justify-center" >
<Image src={orbit} alt="orbit" width={100} height={100} className="h-full w-full " />
</div>
      
    </section>
  );
};

export default Blog;
