import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CiBookmark } from "react-icons/ci";
import { FaBath, FaLocationDot } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdBedroomParent, MdOutlineMessage } from "react-icons/md";

const ListPage = () => {
  return (
    <div className="listpage">
      <div className="w-[95%] my-0 mx-auto p-2 flex gap-2">
        <div className="w-[60%]">
          <div className="listleftTop">
            <h3 className="text-xl font-medium text-slate-300 italic">
              Search results for
            </h3>
            <form className="p-2">
              <div>
                <Label
                  htmlFor="location"
                  className=" font-normal  text-gray-300"
                >
                  Location
                </Label>
                <Input
                  type="text"
                  name="location"
                  placeholder="City Location"
                  className="text-sm lg:text-balance py-[2px] px-[4px] rounded-none text-black font-medium  w-full outline-[#e4f700]"
                />
              </div>
              <div className=" items-end gap-2 py-2 px-0 grid grid-cols-3 lg:grid-cols-6">
                <div>
                  <Label className=" font-normal  text-gray-300" htmlFor="type">
                    Type
                  </Label>
                  <select
                    name="type"
                    id="type"
                    className="block text-sm lg:text-balance p-2.5 rounded-none text-black font-medium w-full"
                  >
                    <option value="">Any</option>
                    <option value="">Any1</option>
                    <option value="">Any2</option>
                  </select>
                </div>
                <div>
                  <Label
                    className=" font-normal  text-gray-300"
                    htmlFor="property"
                  >
                    Property
                  </Label>
                  <select
                    name="property"
                    id="property"
                    className="block text-sm lg:text-balance p-2.5 rounded-none text-black font-medium w-full"
                  >
                    <option value="">Any</option>
                    <option value="">Any1</option>
                    <option value="">Any2</option>
                  </select>
                </div>
                <div>
                  <Label
                    className=" font-normal  text-gray-300"
                    htmlFor="minPrice"
                  >
                    Min Price
                  </Label>
                  <Input
                    type="number"
                    name="minPrice"
                    min={0}
                    max={10000000}
                    placeholder="0"
                    className="text-sm lg:text-balance py-[2px] px-[4px] rounded-none text-black font-medium w-full outline-[#e4f700]"
                  />
                </div>
                <div>
                  <Label
                    className=" font-normal  text-gray-300"
                    htmlFor="maxPrice"
                  >
                    Max Price
                  </Label>
                  <Input
                    type="number"
                    name="maxPrice"
                    min={0}
                    max={10000000}
                    placeholder="0"
                    className="text-sm lg:text-balance py-[2px] px-[4px] rounded-none text-black font-medium  w-full outline-[#e4f700]"
                  />
                </div>
                <div>
                  <Label
                    className=" font-normal  text-gray-300"
                    htmlFor="bedroom"
                  >
                    Bedroom
                  </Label>
                  <Input
                    type="text"
                    name="bedroom"
                    placeholder="Any"
                    className="text-sm lg:text-balance py-[2px] px-[4px] rounded-none text-black font-medium  w-full outline-[#e4f700]"
                  />
                </div>
                <Button
                  variant="secondary"
                  className="mx-2 py-2 text-lg hover:bg-yellow-200 w-auto"
                >
                  <IoSearch />
                </Button>
              </div>
            </form>
          </div>
          {/* ------------------All Hotels Cards-------------- */}
          <div className="p-2">
            <div className=" mb-4 mx-0 p-2 bg-[#2c2c2c] hover:bg-[#3b3b3b] transition-all ease-in duration-300 cursor-pointer rounded-2xl flex gap-2">
              <img
                src="https://images.unsplash.com/photo-1587985064135-0366536eab42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdGVsJTIwcm9vbXxlbnwwfDB8MHx8fDA%3D"
                alt="Room image"
                className=" w-1/2 h-[10rem] object-cover rounded-[10px]"
              />
              <div className="w-full flex flex-col justify-between p-1">
                {/* ----------------top card------------- */}
                <div>
                  <h3 className=" font-medium">
                    A great spsrtmrnt next to the beach!
                  </h3>
                  <h5 className="flex my-[0.3rem] mx-0 items-center gap-1 text-sm text-gray-400 ">
                    <FaLocationDot />
                    456 park avenue, London
                  </h5>
                </div>
                {/* ---------------mid card--------------- */}
                <p className=" w-fit bg-[#fef08a] text-black py-[2px] px-[6px] rounded font-medium text-sm">
                  $1000
                </p>
                {/* --------------bottom card--------- */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className=" flex items-center gap-1 text-[0.8rem] bg-[#ff4e00]  py-[1px] px-[2px] ">
                      <MdBedroomParent />2 bedroom
                    </p>
                    <p className=" flex items-center gap-1 text-[0.8rem] bg-[#005fff] py-[1px] px-[2px] ">
                      <FaBath />1 bathroom
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CiBookmark />
                    <MdOutlineMessage />
                  </div>
                </div>
              </div>
            </div>
            <div className=" mb-4 mx-0 p-2 bg-[#2c2c2c] hover:bg-[#3b3b3b] transition-all ease-in duration-300 cursor-pointer rounded-2xl flex gap-2">
              <img
                src="https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Room image"
                className=" w-1/2 h-[10rem] object-cover rounded-[10px]"
              />
              <div className="w-full flex flex-col justify-between p-1">
                {/* ----------------top card------------- */}
                <div>
                  <h3 className=" font-medium">
                    Quidem nihil beatae doloremque ipsa! Eaque, distinctio!
                  </h3>
                  <h5 className="flex my-[0.3rem] mx-0 items-center gap-1 text-sm text-gray-400 ">
                    <FaLocationDot />
                    456 park avenue, London
                  </h5>
                </div>
                {/* ---------------mid card--------------- */}
                <p className=" w-fit bg-[#fef08a] text-black py-[2px] px-[6px] rounded font-medium text-sm">
                  $1000
                </p>
                {/* --------------bottom card--------- */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className=" flex items-center gap-1 text-[0.8rem] bg-[#ff4e00]  py-[1px] px-[2px] ">
                      <MdBedroomParent />2 bedroom
                    </p>
                    <p className=" flex items-center gap-1 text-[0.8rem] bg-[#005fff] py-[1px] px-[2px] ">
                      <FaBath />1 bathroom
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CiBookmark />
                    <MdOutlineMessage />
                  </div>
                </div>
              </div>
            </div>
            <div className=" mb-4 mx-0 p-2 bg-[#2c2c2c] hover:bg-[#3b3b3b] transition-all ease-in duration-300 cursor-pointer rounded-2xl flex gap-2">
              <img
                src="https://images.unsplash.com/photo-1620332372374-f108c53d2e03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tJTIwdmlld3xlbnwwfDB8MHx8fDA%3D"
                alt="Room image"
                className=" w-1/2 h-[10rem] object-cover rounded-[10px]"
              />
              <div className="w-full flex flex-col justify-between p-1">
                {/* ----------------top card------------- */}
                <div>
                  <h3 className=" font-medium">
                   Lorem ipsum dolor sit amet.
                  </h3>
                  <h5 className="flex my-[0.3rem] mx-0 items-center gap-1 text-sm text-gray-400 ">
                    <FaLocationDot />
                    456 park avenue, London
                  </h5>
                </div>
                {/* ---------------mid card--------------- */}
                <p className=" w-fit bg-[#fef08a] text-black py-[2px] px-[6px] rounded font-medium text-sm">
                  $1000
                </p>
                {/* --------------bottom card--------- */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className=" flex items-center gap-1 text-[0.8rem] bg-[#ff4e00]  py-[1px] px-[2px] ">
                      <MdBedroomParent />2 bedroom
                    </p>
                    <p className=" flex items-center gap-1 text-[0.8rem] bg-[#005fff] py-[1px] px-[2px] ">
                      <FaBath />1 bathroom
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CiBookmark />
                    <MdOutlineMessage />
                  </div>
                </div>
              </div>
            </div>
            <div className=" mb-4 mx-0 p-2 bg-[#2c2c2c] hover:bg-[#3b3b3b] transition-all ease-in duration-300 cursor-pointer rounded-2xl flex gap-2">
              <img
                src="https://images.unsplash.com/photo-1602693680203-a01c07f9dfae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsJTIwcm9vbSUyMHZpZXd8ZW58MHwwfDB8fHww"
                alt="Room image"
                className=" w-1/2 h-[10rem] object-cover rounded-[10px]"
              />
              <div className="w-full flex flex-col justify-between p-1">
                {/* ----------------top card------------- */}
                <div>
                  <h3 className=" font-medium">
                    A consectetur adipisicing elit. Asperiores, voluptatem?
                  </h3>
                  <h5 className="flex my-[0.3rem] mx-0 items-center gap-1 text-sm text-gray-400 ">
                    <FaLocationDot />
                    456 park avenue, London
                  </h5>
                </div>
                {/* ---------------mid card--------------- */}
                <p className=" w-fit bg-[#fef08a] text-black py-[2px] px-[6px] rounded font-medium text-sm">
                  $1000
                </p>
                {/* --------------bottom card--------- */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className=" flex items-center gap-1 text-[0.8rem] bg-[#ff4e00]  py-[1px] px-[2px] ">
                      <MdBedroomParent />2 bedroom
                    </p>
                    <p className=" flex items-center gap-1 text-[0.8rem] bg-[#005fff] py-[1px] px-[2px] ">
                      <FaBath />1 bathroom
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CiBookmark />
                    <MdOutlineMessage />
                  </div>
                </div>
              </div>
            </div>
            <div className=" mb-4 mx-0 p-2 bg-[#2c2c2c] hover:bg-[#3b3b3b] transition-all ease-in duration-300 cursor-pointer rounded-2xl flex gap-2">
              <img
                src="https://images.unsplash.com/photo-1588613877464-207a2d7e9b42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvdGVsJTIwcm9vbSUyMHZpZXd8ZW58MHwwfDB8fHww"
                alt="Room image"
                className=" w-1/2 h-[10rem] object-cover rounded-[10px]"
              />
              <div className="w-full flex flex-col justify-between p-1">
                {/* ----------------top card------------- */}
                <div>
                  <h3 className=" font-medium">
                    London Building
                  </h3>
                  <h5 className="flex my-[0.3rem] mx-0 items-center gap-1 text-sm text-gray-400 ">
                    <FaLocationDot />
                    456 park avenue, London
                  </h5>
                </div>
                {/* ---------------mid card--------------- */}
                <p className=" w-fit bg-[#fef08a] text-black py-[2px] px-[6px] rounded font-medium text-sm">
                  $1000
                </p>
                {/* --------------bottom card--------- */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className=" flex items-center gap-1 text-[0.8rem] bg-[#ff4e00]  py-[1px] px-[2px] ">
                      <MdBedroomParent />2 bedroom
                    </p>
                    <p className=" flex items-center gap-1 text-[0.8rem] bg-[#005fff] py-[1px] px-[2px] ">
                      <FaBath />1 bathroom
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CiBookmark />
                    <MdOutlineMessage />
                  </div>
                </div>
              </div>
            </div>
            <div className=" mb-4 mx-0 p-2 bg-[#2c2c2c] hover:bg-[#3b3b3b] transition-all ease-in duration-300 cursor-pointer rounded-2xl flex gap-2">
              <img
                src="https://images.unsplash.com/photo-1536625737227-92a1fc042e7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdGVsJTIwcm9vbSUyMHZpZXd8ZW58MHwwfDB8fHww"
                alt="Room image"
                className=" w-1/2 h-[10rem] object-cover rounded-[10px]"
              />
              <div className="w-full flex flex-col justify-between p-1">
                {/* ----------------top card------------- */}
                <div>
                  <h3 className=" font-medium">
                    Dubai Sea Hotl
                  </h3>
                  <h5 className="flex my-[0.3rem] mx-0 items-center gap-1 text-sm text-gray-400 ">
                    <FaLocationDot />
                    456 park avenue, London
                  </h5>
                </div>
                {/* ---------------mid card--------------- */}
                <p className=" w-fit bg-[#fef08a] text-black py-[2px] px-[6px] rounded font-medium text-sm">
                  $1000
                </p>
                {/* --------------bottom card--------- */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className=" flex items-center gap-1 text-[0.8rem] bg-[#ff4e00]  py-[1px] px-[2px] ">
                      <MdBedroomParent />2 bedroom
                    </p>
                    <p className=" flex items-center gap-1 text-[0.8rem] bg-[#005fff] py-[1px] px-[2px] ">
                      <FaBath />1 bathroom
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CiBookmark />
                    <MdOutlineMessage />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[40%] h-fit rounded-[20px] overflow-hidden ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1623775674907!2d72.9555434775258!3d19.18810890215794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b91cfc48b86f%3A0xc4135d6ca7dca7e2!2sThe%20Thane%20Club!5e0!3m2!1sen!2sin!4v1714308864909!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className=" w-full h-[100vh]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ListPage;
