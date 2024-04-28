import { IoSearch } from "react-icons/io5";
import { Button } from "./ui/button";
import { useState } from "react";
import { Input } from "./ui/input";

const types = ["Buy", "Rent"];

const SearchBar = () => {
  const [query, setquery] = useState({
    type: "Buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val: any) => {
    setquery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchbar">
      <div className="type">
        {types.map((type) => (
          <Button
            key={type}
            onClick={() => switchType(type)}
            className={
              query.type === type
                ? "bg-[#e4f700] text-black rounded-none py-2 px-8 transition-all ease-in duration-300 hover:bg-slate-300"
                : "rounded-none py-2 px-8 transition-all ease-in duration-300 hover:bg-slate-300 hover:text-black"
            }
          >
            {type}
          </Button>
        ))}
      </div>
      <form className="flex items-center">
        <Input
          type="text"
          name="location"
          placeholder="City Location"
          className="text-sm lg:text-balance py-[2px] px-[4px] lg:p-2 rounded-none text-black font-medium outline-[#e4f700]"
        />
        <Input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          className="text-sm lg:text-balance py-[2px] px-[4px] lg:p-2 rounded-none text-black font-medium outline-[#e4f700]"
        />
        <Input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          className="text-sm lg:text-balance py-[2px] px-[4px] lg:p-2 rounded-none text-black font-medium outline-[#e4f700]"
        />
        <Button variant="secondary" className="mx-2 py-2 text-lg">
          <IoSearch />
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
