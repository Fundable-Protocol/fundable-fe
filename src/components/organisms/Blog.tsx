import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BlogCarousel from "../molecules/BlogCarousel";




const Blog = () => {
    return (

        <section className="text-white w-full flex items-center justify-center flex-col gap-4  px-4 pb-5 overflow-hidden bg-red-500   " >
          <header className=" w-full max-w-[1172px] flex items-center justify-between  font-syne -auto md:ml-auto pr-[5%] " >
            <h1 className="max-w-[504px] font-bold text-[42px] leading-[47.88px] " >Read From <br/> Our Blog</h1>

            <div className="flex flex-row items-center gap-3 " >
                <button className="bg-transparent flex items-center justify-center w-[47.88px] h-[47.88px] text-[24px] text-[#4A4949] border-2 border-[#4A4949] hover:border-[#ffffff] hover:text-[#ffffff] " ><FaChevronLeft/></button>
                <button className="bg-transparent flex items-center justify-center w-[47.88px] h-[47.88px] text-[24px] text-[#4A4949] border-2 border-[#4A4949] hover:border-[#ffffff] hover:text-[#ffffff] " ><FaChevronRight/></button>
            </div>
          </header>


  
<BlogCarousel/>




        </section>

    )
}

export default Blog;