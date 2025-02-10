"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import plusIcon from "../../../public/plus.svg";
import minusIcon from "../../../public/minus.svg";
import Sphere from "../../../public/abstract-sphere.svg";
import blur from "../../../public/blur.svg";
import star from "../../../public/star.svg";
import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const buttonProps = [
    {
      id: 1,
      text: "Getting started",
    },
    {
      id: 2,
      text: "Security & Privacy",
    },
    {
      id: 3,
      text: "Transactions",
    },
    {
      id: 4,
      text: "Support",
    },
    {
      id: 5,
      text: "Couldn't find what you were looking for?",
    },
  ];

  const faqData = [
    {
      id: 1,
      heading: "How do I create an account on the platform?",
      content:
        "To create an account, visit the 'Sign Up' page, enter your email and password, verify your email through the link sent to you, and complete your profile setup. Once done, you can start using the platform.",
    },
    {
      id: 2,
      heading: "What is the first step to set up my crypto wallet?",
      content:
        "To create an account, visit the 'Sign Up' page, enter your email and password, verify your email through the link sent to you, and complete your profile setup. Once done, you can start using the platform.",
    },
    {
      id: 3,
      heading: "How can I connect my existing wallet to the platform?",
      content:
        "To create an account, visit the 'Sign Up' page, enter your email and password, verify your email through the link sent to you, and complete your profile setup. Once done, you can start using the platform.",
    },
    {
      id: 4,
      heading: "What are the requirements to start using the platform?",
      content:
        "To create an account, visit the 'Sign Up' page, enter your email and password, verify your email through the link sent to you, and complete your profile setup. Once done, you can start using the platform.",
    },
  ];

  return (
    <section className="relative flex items-center justify-center w-full   px-3 py-[10%] my-5 ">
        <div className="text-white z-[10000] w-full max-w-[1008px] mx-auto  flex flex-col items-center justify-center gap-8" >
      <div className=" text-center  flex items-center justify-center flex-col">
        <h1 className=" text-[36px] md:text-[42px] font-bold text-[#ffffff] leading-[47.88px] mb-2 font-syne ">
          Frequently Asked Questions
        </h1>
        <p className=" text-[#6F717E] leading-[19.88px] font-medium text-[12.6px] md:w-[260px] w-[325px] ">
          Get the answers you need to navigate our platform with confidence.
        </p>
      </div>

      <div className=" w-full hidden  md:flex items-center justify-start gap-2 ">
        {buttonProps.map((buttonProp) => (
          <div
            key={buttonProp.id}
            className={`bg-gradient-to-b from-[#202020] to-[#696767] p-[2px] rounded-[20.5px] ${
              buttonProp.id === 5 ? "ml-auto " : "null"
            } `}
          >
            <Button variant="darkBlue">{buttonProp.text}</Button>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-4 ">
        {faqData.map((data, index) => (
          <Card
            key={data.id}
            className="bg-[#020616] border border-[#272B3B] w-full py-6 rounded-[19px] "
          >
            <CardContent>
              <CardHeader
                onClick={() => toggleOpen(index)}
                className=" p-0 mb-5 w-full flex flex-row items-center justify-between gap-3 cursor-pointer "
              >
                {" "}
                <h1 className=" text-[#91949A] text-[18.2px] font-semibold ">
                  {" "}
                  {data.heading}{" "}
                </h1>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleOpen(index);
                  }}
                  className="text-white flex items-center justify-center cursor-pointer outline-none border-none "
                >
                  {openIndex === index ? (
                    <Image
                      src={minusIcon}
                      alt="plus-icon"
                      width={100}
                      height={100}
                      className="w-[21px] object-contain "
                    />
                  ) : (
                    <Image
                      src={plusIcon}
                      alt="plus-icon"
                      width={100}
                      height={100}
                      className="w-[21px] object-contain "
                    />
                  )}
                </button>
              </CardHeader>

              {openIndex === index && (
                <CardDescription className=" p-0 ">
                  <p className=" max-w-[570px] text-[#888B96] font-semibold text-[16.6px] leading-[26px] ">
                    {" "}
                    {data.content}{" "}
                  </p>
                </CardDescription>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      </div>


      <div className="top-0 left-[5%] absolute  h-[205.27px] w-[186px] hidden md:flex items-center justify-center" >
     
                    <Image
                      src={Sphere}
                      alt="sphere"
                      width={100}
                      height={100}
                      className=" object-cover w-full h-full "
                    />
                    </div>

                    
      <div className="top-[-28%] left-[50%] transform translate-x-[-50%] md:w-[950px] md:h-[950px] absolute  hidden md:flex  items-center justify-center  rounded-[50%] overflow-hidden " >
     
     <Image
       src={blur}
       alt="blur"
       width={100}
       height={100}
       className=" object-cover w-full h-full "
     />

     
     </div>

     <div className="bottom-[-6%] left-[60%] transform translate-x-[-50%] md:w-[320.99px] md:h-[320.99px] absolute  hidden md:flex  items-center justify-center  rounded-[50%]  " >
     
     <Image
       src={star}
       alt="star"
       width={100}
       height={100}
       className=" object-cover w-full h-full "
     />

     
     </div>
      
    </section>
  );
};

export default Faq;
