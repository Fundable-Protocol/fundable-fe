import Image from "next/image";
import Logo from "../../../public/imgs/fundable_logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full text-[#ffffff] flex items-stretch justify-evenly md:justify-between md:min-h-[245.78px] gap-3 px-3 py-3 ">
      <div className="  mx-auto flex items-center justify-center md:block  px-1 ">
        <Image
          priority
          alt="logo"
          src={Logo}
          className=" w-[71.44px] h-[13.44px] md:w-[171.25px] md:h-[32.25px] object-contain"
        />
      </div>

      <div className=" w-full max-w-[1029.55px] flex flex-col items-stretch justify-between  ">
        <div className=" w-full flex flex-row items-start justify-evenly md:justify-between p-1 ">
          <ul className="flex flex-row md:flex-col gap-1 ">
            <li className=" text-[11.2px] md:text-[12.29px] font-normal leading-[17.2px] mx-1 ">
              <Link href="/">For developers</Link>
            </li>

            <li className=" text-[11.2px] md:text-[12.29px] font-normal leading-[17.2px] mx-1 ">
              <Link href="/">Blog</Link>
            </li>

            <li className=" text-[11.2px] md:text-[12.29px] font-normal leading-[17.2px] mx-1 ">
              <Link href="/">Contacts</Link>
            </li>
          </ul>

          <small className=" opacity-[40%] text-[10.53px] font-normal leading-[13.69px] ">
            © 2025 — Copyright
          </small>
        </div>

        <div className=" hidden md:flex w-full  flex-row items-end justify-between p-1  ">
          <div>
            <h1 className="text-[8.78px] leading-[12.29px] opacity-[60%] font-medium mb-2 ">
              Contact us
            </h1>

            <ul className="flex flex-col gap-1 ">
              <li className=" text-[12.29px] font-normal leading-[17.2px] ">
                <Link href="/">+23470-18771795</Link>
              </li>

              <li className=" text-[12.29px] font-normal leading-[17.2px] ">
                <Link href="/">info@fundable.finance</Link>
              </li>
            </ul>
          </div>

          <ul className=" flex flex-row items-center justify-center gap-1 ">
            <li className=" text-[10.53px] font-normal leading-[13.69px] py-[5.27px] px-[17.56px] border-[0.88px] border-[#fffff] max-w-[72.11px] max-h-[24.53px] rounded-[35.11px] mx-1 border-opacity-50 ">
              <a href="#" className=" cursor-pointer " >Twitter</a>
            </li>
            <li className="  text-[10.53px] font-normal leading-[13.69px] py-[5.27px] px-[17.56px] border-[0.88px] border-[#fffff] max-w-[72.11px] max-h-[24.53px] rounded-[35.11px] mx-1 border-opacity-50 ">
              <a href="#" className=" cursor-pointer ">Discord</a>
            </li>
            <li className="text-[10.53px] font-normal leading-[13.69px] py-[5.27px] px-[17.56px] border-[0.88px] border-[#fffff] max-w-[72.11px] max-h-[24.53px] rounded-[35.11px] mx-1 border-opacity-50">
              <a href="#" className=" cursor-pointer ">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
