
import Banner from "./Banner/Banner";
import ChooseOurPlatform from "./ChooseOurPlatform/ChooseOurPlatform";
import WeDeliverBest from "./WeDeliverBest/WeDeliverBest";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto mt-20">
        <ChooseOurPlatform></ChooseOurPlatform>
        <WeDeliverBest></WeDeliverBest>
      </div>
    </div>
  );
};

export default Home;
