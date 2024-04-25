// @ts-nocheck
import { floorplanImg } from "@/utils";
import { animateWithGsap } from "@/utils/animations";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const JoinNow = () => {
  useGSAP(() => {
    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="joinnow">
      <div className="relative flex items-center justify-center">
        <img
          src={floorplanImg}
          alt="floorPlan"
          className="w-full h-[100vh] object-contain"
        />
        <form className=" absolute h-[100vh] backdrop-contrast-50 flex flex-col items-center justify-center w-full">
          <h3 className="g_fadeIn opacity-0 text-8xl text-zinc-900 font-semibold">
            Join Now
          </h3>
          <div className="g_fadeIn opacity-0 p-4 my-8 mx-0  bg-white rounded-full flex items-center gap-4 shadow-lg shadow-[#26394d]">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className="rounded-full border-none outline-none font-medium py-1 px-2 text-black  text-sm placeholder:text-slate-700 placeholder:italic"
            />
            <button className=" p-1.5 px-3 bg-[#052bff] rounded-full text-sm border-none outline-none transition-all ease-in duration-300 hover:bg-blue-800">
              Join Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinNow;
