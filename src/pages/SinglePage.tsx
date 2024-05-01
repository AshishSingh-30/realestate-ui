import Map from "@/components/Map";
import Slider from "@/components/Slider";
import { singlePostData, userData } from "@/lib/dummyData";
import { CiBookmark } from "react-icons/ci";
import { FaTools } from "react-icons/fa";
import { FaLocationDot, FaSchool } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoIosRestaurant } from "react-icons/io";
import { LuBath } from "react-icons/lu";
import { MdOutlineKingBed, MdOutlineMessage, MdPets } from "react-icons/md";
import { RxDimensions } from "react-icons/rx";
import { TbBusStop } from "react-icons/tb";

const SinglePage = () => {
  return (
    <div className=" w-[95%] my-0 mx-auto py-4 px-2 h-full flex lg:flex-row flex-col lg:gap-0 gap-4 ">
      <div className=" lg:flex-[3] flex-none ">
        <div className="lg:pr-[50px] pr-0">
          <Slider images={singlePostData.images} />
          <div className=" mt-12">
            <div className="flex justify-between ">
              <div className="flex flex-col md:gap-5 gap-2">
                <h1 className="font-medium lg:text-xl text-base">{singlePostData.title}</h1>
                <div className="flex items-center gap-1 md:text-sm text-xs text-gray-400 ">
                  <FaLocationDot />
                  <span>{singlePostData.address}</span>
                </div>
                <p className="w-fit bg-[#fef08a] text-black py-[2px] px-[6px] rounded font-medium md:text-lg text-[0.9rem]">
                  {" "}
                  $ {singlePostData.price}
                </p>
              </div>
              <div className="flex flex-col items-center justify-center md:gap-5 gap-2 h-max md:py-2 md:px-12 p-2 rounded-lg bg-yellow-100 text-zinc-700 font-semibold ">
                <img
                  src={userData.img}
                  alt="user img"
                  className=" w-10 h-10 md:w-12 md:h-12 object-cover rounded-full"
                />
                <span className=" md:text-sm text-xs">{userData.name}</span>
              </div>
            </div>
            <div className=" mt-4 md:mt-12 md:text-[0.95rem] text-sm text-gray-300 leading-5">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className=" flex-[2] bg-white text-black rounded-xl">
        <div className="py-[10px] px-[20px] flex flex-col gap-4">
          <p className="font-semibold text-[1rem]">General</p>
          <div className="flex flex-col gap-5 py-5 px-2.5 bg-gray-100 rounded-lg">
            <div className=" flex items-center gap-2">
              <FaTools className=" text-[#ff3c00]" />
              <div className="text-sm">
                <span className=" font-semibold">Utilities</span>
                <p className=" text-sm">Renter is responsible</p>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <MdPets className=" text-[#ff3c00]" />
              <div className="text-sm">
                <span className=" font-semibold">Pet policy</span>
                <p className=" text-sm">Pets Allowed</p>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <GiTakeMyMoney className=" text-[#ff3c00]" />
              <div className="text-sm">
                <span className=" font-semibold">Property Fees</span>
                <p className=" text-sm">
                  Most have 3x the rent in total household income
                </p>
              </div>
            </div>
          </div>
          <p className="font-semibold text-[1rem]">Room Sizes</p>
          <div className=" flex justify-between">
            <div className=" flex items-center gap-2 py-2 px-2 text-xs bg-gray-100 rounded-lg">
              <RxDimensions />
              <span className="font-semibold">80sqft</span>
            </div>
            <div className=" flex items-center gap-2 py-2 px-2 text-sm bg-gray-100 rounded-lg">
              <MdOutlineKingBed />
              <span className="font-semibold">2 beds</span>
            </div>
            <div className=" flex items-center gap-2 py-2 px-2 text-sm bg-gray-100 rounded-lg">
              <LuBath />
              <span className="font-semibold">1 bathroom</span>
            </div>
          </div>
          <p className="font-semibold text-[1rem]">Nearby Places</p>
          <div className="flex justify-between items-center gap-5 py-5 px-2.5 bg-gray-100 rounded-lg">
            <div className=" flex items-center gap-2">
              <FaSchool className=" text-[#ff3c00]" />
              <div className="text-xs">
                <span className="font-semibold">School</span>
                <p>250Km away</p>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <TbBusStop className=" text-[#ff3c00]" />
              <div className="text-xs">
                <span className="font-semibold">Bus Stop</span>
                <p>100m away</p>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <IoIosRestaurant className=" text-[#ff3c00]" />
              <div className="text-xs">
                <span className="font-semibold">Restaurant</span>
                <p>200Km away</p>
              </div>
            </div>
          </div>
          <p className="font-semibold text-[1rem]">Locations</p>
          <div className=" w-full h-[200px]">
            <Map items={[singlePostData]} />
          </div>
          <div className="flex justify-between">
            <button className="p-2 flex items-center gap-1 bg-gray-100 text-xs font-medium rounded transition-all duration-300 ease-in hover:bg-slate-200 hover:shadow-md">
              <MdOutlineMessage />
              Send a Message
            </button>
            <button className="p-2 flex items-center gap-1 bg-gray-100 text-xs font-medium rounded transition-all duration-300 ease-in hover:bg-slate-200 hover:shadow-md">
              <CiBookmark />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
