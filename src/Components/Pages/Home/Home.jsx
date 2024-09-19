
import Banner from "./Banner/Banner";
import ChooseOurPlatform from "./ChooseOurPlatform/ChooseOurPlatform";
import Testimonials from "./Testimonials/Testimonials";
import WeDeliverBest from "./WeDeliverBest/WeDeliverBest";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className=" mt-20">
        <ChooseOurPlatform></ChooseOurPlatform>
        <WeDeliverBest></WeDeliverBest>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
