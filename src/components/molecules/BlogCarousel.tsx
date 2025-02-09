import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import carouselImage from "../../../public/carousel-card-img.svg"
import { FaArrowRight } from "react-icons/fa";


const BlogCarousel = () => {

  const cardDetails = [
    {
      heading: "Talk it out with audio",
      description: "Effortlessly distribute funds to recipients, with complete transparency, robust security, and real-time tracking.",
      Image: carouselImage,
      link: "link"
    },
    {
      heading: "Talk it out with audio",
      description: "Effortlessly distribute funds to recipients, with complete transparency, robust security, and real-time tracking.",
      Image: carouselImage,
      link: "link"
    },
    {
      heading: "Talk it out with audi",
      description: "Effortlessly distribute funds to recipients, with complete transparency, robust security, and real-time tracking.",
      Image: carouselImage,
      link: "link"
    },
    {
      heading: "Talk it out with audio",
      description: "Effortlessly distribute funds to recipients, with complete transparency, robust security, and real-time tracking.",
      Image: carouselImage,
      link: "link"
    },
  ]



    return (
        <Carousel
      opts={{
        align: "start",
      }}
      className="w-full ml-auto max-w-[1172px] flex items-center justify-center bg-orange-600 "
    >
      <CarouselContent className=" w-full" >
        {cardDetails.map((cardDetail, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3   max-w-[335px]     ">
            <div className="p-1 ">

             <Card className="bg-red-800 max-w-[335px] h-[398px] bg-[#14161F66] border border-[#1E212F] backdrop-blur-[40%] rounded-[15px] p-0 " >
             <CardContent className= "w-full h-full flex flex-col items-center justify-stretch gap-3 rounded-[15px] px-2 py-1  " >
              <div className="w-full h-[50%] m-0 " >
            <Image src={cardDetail.Image} alt="image" width={100} height={100} className="w-full h-full object-contain" />
              </div>
            <CardDescription className=" w-full  h-full flex flex-col items-start justify-between py-3 "  >
              <h1 className="text-[#ffffff] text-[15.58px] font-medium leading-[21.81px] " >{cardDetail.heading} </h1>
              <p className="text-[#A5AEC0] text-[16.62px] font-medium leading-[24.93px] font-urbanist  " >{cardDetail.description} </p>
              <a href={cardDetail.link} className="text-[#7A7A7A] text-[15.27px] font-semibold font-urbanist flex items-center gap-2 " > <span>Read more</span> <span><FaArrowRight/></span> </a>
            </CardDescription>
             </CardContent>
             </Card>
            </div>

          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    )
}


export default  BlogCarousel