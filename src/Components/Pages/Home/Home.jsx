
import Banner from "./Banner/Banner";
import ChooseOurPlatform from "./ChooseOurPlatform/ChooseOurPlatform";
import Testimonials from "./Testimonials/Testimonials";
import WeDeliverBest from "./WeDeliverBest/WeDeliverBest";

import CustomerReview from "./CustomerReview/CustomerReview";
import Resume_Templates from "../Resume_Templates/Resume_Templates";
// import ResumeTemplatePreview from "./ResumeTemplatePreview/ResumeTemplatePreview";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Resume_Templates/>
            <div className="container w-[98%] m-auto mt-20 space-y-20">
            
                    <ChooseOurPlatform></ChooseOurPlatform>
                    <WeDeliverBest></WeDeliverBest>
                    <Testimonials></Testimonials>
                    <CustomerReview></CustomerReview>
                
            </div>
        </div>
    );
};

export default Home;
