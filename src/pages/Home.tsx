import AnimateMarquee from "@/components/AnimateMarquee";
import Banner from "@/components/Banner";
import Counts from "@/components/Counts";
import Highlight from "@/components/Highlight";
import JoinNow from "@/components/JoinNow";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Highlight />
      <Counts />
      <AnimateMarquee />
      <JoinNow />
    </div>
  );
};

export default Home;
