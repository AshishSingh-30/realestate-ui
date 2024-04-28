import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VideoCarousel from "./VideoCarousel";

const Highlight = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });

    gsap.from("#video-slider  ", {
      scrollTrigger: {
        trigger: "#video-slider ",
        start: "5% bottom",
      },
      opacity: 0,
      scale: 1.2,
      duration: 2,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full sm:py-32 py-20 sm:px-10 px-5"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1
            id="title"
            className="text-gray lg:text-6xl md:text-5xl text-3xl lg:mb-0 mb-5 font-medium opacity-0 translate-y-20"
          >
            Get the hightlights.
          </h1>
        </div>
        <div id="video-slider">
          <VideoCarousel />
        </div>
      </div>
    </section>
  );
};

export default Highlight;
