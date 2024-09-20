
import Banner from "./Banner/Banner";
import ChooseOurPlatform from "./ChooseOurPlatform/ChooseOurPlatform";
import Testimonials from "./Testimonials/Testimonials";
import WeDeliverBest from "./WeDeliverBest/WeDeliverBest";

import CustomerReview from "./CustomerReview/CustomerReview";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto mt-20 space-y-20">
            
                    <ChooseOurPlatform></ChooseOurPlatform>
                    <WeDeliverBest></WeDeliverBest>
                    <Testimonials></Testimonials>
                    <CustomerReview></CustomerReview>
                
            </div>
        </div>
    );
};

export default Home;
