
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

                <CustomerReview></CustomerReview>
                <div className="container mx-auto mt-20">
                    <ChooseOurPlatform></ChooseOurPlatform>
                    <WeDeliverBest></WeDeliverBest>
                    <Testimonials></Testimonials>
                </div>
            </div>
        </div>
    );
};

export default Home;
