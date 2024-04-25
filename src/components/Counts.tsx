// @ts-nocheck
import {
  classicroom,
  contemporaryroom,
  minimalistroom,
  modernroom,
} from "@/utils";
import { FaTicketSimple } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { RiHome5Fill } from "react-icons/ri";


import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "@/utils/animations";

const Counts = () => {
  useGSAP(() => {
    animateWithGsap("#bottomText", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="bg-[#f8f8f8] text-black">
      <div className="w-[90%] my-0 mx-auto py-[8rem] px-[2rem]">
        <h2 className="text-[3rem] font-semibold uppercase">
          We offer the perfect match of <br />
          properties tailored to your needs
        </h2>
        <p className=" w-1/2 text-[1rem] font-medium text-muted-foreground">
          We find your perfect property, be it a cozy home, spacious apartment,
          or commercial space. We listen, match your needs precisely, and
          prioritize your satisfaction. Let us help you find your ideal fit.
        </p>
        <div className="flex items-center justify-between flex-wrap gap-4 my-8 mx-0">
          <h4 className="py-[0.6rem] px-[0.8rem] border-[1px] border-solid border-black font-medium rounded-full flex items-center gap-4 text-lg">
            <FaTicketSimple className="text-[#1400ff]" />
            Simplicity
          </h4>
          <h4 className="py-[0.6rem] px-[0.8rem] border-[1px] border-solid border-black font-medium rounded-full flex items-center gap-4 text-lg">
            <MdReviews className="text-[#1400ff]" />
            Trustworthy reviews
          </h4>
          <h4 className="py-[0.6rem] px-[0.8rem] border-[1px] border-solid border-black font-medium rounded-full flex items-center gap-4 text-lg">
            <RiHome5Fill className="text-[#1400ff]" />
            Home insurance
          </h4>
        </div>
        <div className="my-12 mx-0  pt-4">
          <p className=" text-green-600 text-2xl">Our Success</p>
          <div className="flex items-center justify-between flex-wrap gap-4 pt-6">
            <div>
              <h4 className="text-8xl">100%</h4>
              <p>Easy & Safe</p>
            </div>
            <div>
              <h4 className="text-8xl">12K+</h4>
              <p>Property in Sale & Rent</p>
            </div>
            <div>
              <h4 className="text-8xl">40+</h4>
              <p>Awward Winning</p>
            </div>
          </div>
        </div>
        <div className="mt-[6rem] mx-0 py-12 px-0">
          <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <div className="p-2 text-center">
              <h3 className="my-2 font-medium uppercase">Classic</h3>
              <img
                src={classicroom}
                alt="classic"
                className="lg:w-[30vw] lg:h-[60vh] w-full object-cover transition-all duration-300 ease-in hover:scale-105 cursor-pointer"
              />
            </div>
            <div className="p-2 text-center ">
              <h3 className="my-2 font-medium uppercase">Modern</h3>
              <img
                src={modernroom}
                alt="modern"
                className="lg:w-[30vw] lg:h-[60vh] w-full object-cover transition-all duration-300 ease-in hover:scale-105 cursor-pointer"
              />
            </div>
            <div className="p-2 text-center ">
              <h3 className="my-2 font-medium uppercase">Minimalist</h3>
              <img
                src={minimalistroom}
                alt="minimalist"
                className="lg:w-[30vw] lg:h-[60vh] w-full object-cover transition-all duration-300 ease-in hover:scale-105 cursor-pointer"
              />
            </div>
            <div className="p-2 text-center">
              <h3 className="my-2 font-medium uppercase">Contemporary</h3>
              <img
                src={contemporaryroom}
                alt="contemporary"
                className="lg:w-[30vw] lg:h-[60vh] w-full object-cover transition-all duration-300 ease-in hover:scale-105 cursor-pointer"
              />
            </div>
          </div>
          <p
            id="bottomText"
            className=" opacity-0 mt-32 mx-0 text-center text-2xl font-medium uppercase "
          >
            Whether you're searching for{" "}
            <span className=" font-semibold lg:text-[2.5rem] text-4xl">
              houses, apartments, or condos.
            </span>{" "}
            <br />
            Its easy to find a place you'll love.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Counts;
