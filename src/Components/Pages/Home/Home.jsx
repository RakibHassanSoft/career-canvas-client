
import Banner from "./Banner/Banner";
import ChooseOurPlatform from "./ChooseOurPlatform/ChooseOurPlatform";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto mt-20">
        <ChooseOurPlatform></ChooseOurPlatform>
      </div>
    </div>
  );
};

export default Home;
