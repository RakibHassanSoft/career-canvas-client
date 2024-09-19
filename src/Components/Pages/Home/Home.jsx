
import Banner from "./Banner/Banner";

import CustomerReview from "./CustomerReview/CustomerReview";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto mt-20 space-y-20">
        
        <CustomerReview></CustomerReview>
      </div>
    </div>
  );
};

export default Home;
