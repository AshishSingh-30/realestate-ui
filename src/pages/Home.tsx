import Banner from "@/components/Banner";
import Counts from "@/components/Counts";
import Highlight from "@/components/Highlight";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Highlight />
      <Counts />
    </div>
  );
};

export default Home;
