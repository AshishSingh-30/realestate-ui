import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlides = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(images.length - 1);
      } else {
        setImageIndex(imageIndex - 1);
      }
    } else {
      if (imageIndex === images.length - 1) {
        setImageIndex(0);
      } else {
        setImageIndex(imageIndex + 1);
      }
    }
  };
  return (
    <div className="w-full md:h-[50vh] h-full flex md:flex-row flex-col gap-5 ">
      {imageIndex !== null && (
        <div className=" z-[9999] absolute w-[100vw] h-[100vh] top-0 left-0 bg-black flex items-center justify-between  ">
          <div className=" flex items-center justify-center cursor-pointer flex-1">
            <IoIosArrowBack
              className=" text-5xl"
              onClick={() => changeSlides("left")}
            />
          </div>
          <div className="flex-[10]">
            <img
              src={images[imageIndex]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" flex items-center justify-center cursor-pointer flex-1">
            <IoIosArrowForward
              className=" text-5xl"
              onClick={() => changeSlides("right")}
            />
          </div>
          <div
            className=" absolute top-3 right-12 text-white text-xl cursor-pointer"
            onClick={() => setImageIndex(null)}
          >
            X
          </div>
        </div>
      )}

      <div className="flex-[3]">
        <img
          src={images[0]}
          alt="first image"
          className=" w-full h-full object-cover rounded-lg cursor-pointer"
          onClick={() => setImageIndex(0)}
        />
      </div>
      <div className="flex justify-between gap-2 flex-[1] md:flex-col flex-row overflow-x-auto">
        {images.slice(1).map((img, index) => (
          <img
            src={img}
            alt="other image"
            key={index}
            className=" w-full h-24 object-cover rounded-lg cursor-pointer "
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
