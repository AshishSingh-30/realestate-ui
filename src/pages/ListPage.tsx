import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoSearch } from "react-icons/io5";

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
              <div className=" items-end gap-2 p-2 grid grid-cols-3 lg:grid-cols-6">
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
                <Button variant="secondary" className="mx-2 py-2 text-lg hover:bg-yellow-200 w-full">
                  <IoSearch />
                </Button>
              </div>
            </form>
          </div>
          <div className="listleftBottom"></div>
        </div>
        <div className=" w-[40%] rounded-[20px] overflow-hidden">
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
