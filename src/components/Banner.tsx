import SearchBar from "./SearchBar";

const Banner = () => {
  return (
    <div className="banner">
      <div className="w-[95%] my-12 mx-auto p-2">
        <div className="my-4">
          <h1 className="text-[5rem] font-semibold uppercase leading-snug">
            Easy way to find a <br />
            perfect property
          </h1>
          <div className=" my-8 flex items-end gap-6 flex-wrap">
            <SearchBar />
            <p className="text-[#dae36f] text-[0.9rem] font-medium">
              "Explore endless possibilities in your quest for the perfect home{" "}
              <br />
              Buy, Rent, or View listings — all at your fingertips."
            </p>
          </div>
        </div>
        <div className=" mt-16 flex items-center justify-end">
          <img
            src="https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Banner Image"
            className="h-[100vh] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
