import { bannerImg } from "@/utils";
import SearchBar from "./SearchBar";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Banner = () => {
  useGSAP(() => {
    gsap.to("#bannerHeading", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
    });

    gsap.fromTo(
      "#bannerInput",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      }
    );

    gsap.fromTo(
      "#bannerImg",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <div className="banner">
      <div className="w-[95%] my-0 mx-auto">
        <div className="my-[3rem] lg:my-[5rem]">
          <h1
            id="bannerHeading"
            className=" text-[2.3rem] md:text-[3.7rem] lg:text-[5rem] font-semibold uppercase leading-snug opacity-0 translate-y-10"
          >
            Easy way to find a <br />
            perfect property
          </h1>
          <div
            id="bannerInput"
            className=" my-8 flex items-end gap-6 flex-wrap"
          >
            <SearchBar />
            <p className="text-[#dae36f] text-[0.9rem] font-medium">
              "Explore endless possibilities in your quest for the perfect home{" "}
              <br />
              Buy, Rent, or View listings — all at your fingertips."
            </p>
          </div>
        </div>
        <div
          id="bannerImg"
          className=" mt-16 flex items-center justify-end relative"
        >
          <div className=" absolute top-0 lg:top-[-10%] right-[10%]">
            <svg
              viewBox="0 0 100 100"
              width="120"
              height="120"
              className="animate-circle bg-[#e4f700] w-fit rounded-full p-0.5"
            >
              <defs>
                <path
                  id="circle"
                  d="
                                    M 50, 50
                                    m -37, 0
                                    a 37,37 0 1,1 74,0
                                    a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text className=" text-[0.85rem] font-medium">
                <textPath xlinkHref="#circle">
                  discover the best home property
                </textPath>
              </text>
            </svg>
          </div>
          <img
            src={bannerImg}
            alt="Banner Image"
            className="h-[100vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
