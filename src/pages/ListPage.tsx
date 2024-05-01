import Map from "@/components/Map";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoSearch } from "react-icons/io5";
import { listData } from "@/lib/dummyData";
import Card from "@/components/Card";

const ListPage = () => {
  const data = listData;
  console.log(data);
  return (
    <div className="listpage">
      <div className="w-[95%] my-0 mx-auto py-4 px-2 flex gap-2">
        <div className="w-[60%]">
          <div className="listleftTop">
            <h3 className="text-[1rem] font-medium text-slate-300 italic">
              Search results for {` `} <b className=" text-xl">london</b>
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
                  className="text-sm lg:text-[0.9rem] py-[2px] px-[4px] rounded-none text-black font-medium  w-full outline-[#e4f700]"
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
                    className="block text-sm lg:text-[0.9rem] p-2.5 rounded-none text-black font-medium w-full cursor-pointer"
                  >
                    <option value="">Any</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
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
                    className="block text-sm lg:text-[0.9rem] p-2.5 rounded-none text-black font-medium w-full cursor-pointer"
                  >
                    <option value="">Any</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="condo">Condo</option>
                    <option value="land">Land</option>
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
                    className="text-sm lg:text-[0.9rem] py-[2px] px-[4px] rounded-none text-black font-medium w-full outline-[#e4f700]"
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
                    className="text-sm lg:text-[0.9rem] py-[2px] px-[4px] rounded-none text-black font-medium  w-full outline-[#e4f700]"
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
                    className="text-sm lg:text-[0.9rem] py-[2px] px-[4px] rounded-none text-black font-medium  w-full outline-[#e4f700]"
                  />
                </div>
                <Button
                  variant="secondary"
                  className="mx-2 py-2 text-lg bg-yellow-100 hover:bg-yellow-300 w-auto"
                >
                  <IoSearch />
                </Button>
              </div>
            </form>
          </div>
          {/* ------------------All Hotels Cards-------------- */}
          <div className="p-2">
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className=" w-[40%] h-[90vh] rounded-[20px] overflow-hidden">
          <Map items={data} />
        </div>
      </div>
    </div>
  );
};

export default ListPage;
