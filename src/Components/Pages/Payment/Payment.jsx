import { Elements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { Typewriter } from 'react-simple-typewriter'

const Payment = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
  const handleCardClick = (amount) => {
    setSelectedAmount(amount);
  };
  const formatAmount = (amount) => (amount / 100).toFixed(2);
  return (
    <div>
      <div className="bg-gray-300 py-20">
      <h1 className='text-center pt-6 text-gray-500 pb-8 md:pb-14 text-4xl px-1 font-semibold'>
        We Offer The Best Plan.  
        <span className='text-green-500'>
        <Typewriter 
        
           words={['Choose Your Plan!']}
           loop={5}
           cursor
           cursorStyle='_'
           typeSpeed={90}
           deleteSpeed={50}
           delaySpeed={1300}
           ></Typewriter>
        </span>
      </h1>

        <div className="text-center flex flex-col md:flex-row gap-3 md:gap-3 justify-center px-auto px-10 md:px-0">
          {/* Basic */}
          
          <div data-aos-delay="100"
          data-aos-duration="1000"
          data-aos="flip-left"
          className='hover:z-10'>
        <div 
          
          className="lg:border-2 lg:border-green-500 rounded-lg shadow-lg p-6 md:w-72 text-gray-700 bg-white hover:bg-green-100 flex flex-col justify-between transition-transform transform hover:scale-x-110 hover:scale-y-125 hover:z-10  duration-500 ease-in-out"
        >
          <h3 className="text-2xl font-bold mb-2">-Basic-</h3>
          <ul className="text-gray-600 mb-6 list-disc text-left pl-9 mt-3 font-medium flex-grow">
            <li>1 month access.</li>
            <li>Get community Membership</li>
            <li>Access to all Template.</li>
          </ul>
          <div className="text-4xl font-bold mb-2 text-green-500">
            $20 
          </div>
          <button onClick={() => handleCardClick(2000)} className="w-full bg-green-400 text-gray-700 font-semibold py-2 rounded-lg hover:bg-green-700">
            Get Started
          </button>
        </div>
        </div>

        {/* Premium  */}
                  <div 
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos="flip-left"
          className='hover:z-10'
        >
          <div 
            className="lg:border-2 lg:border-green-500 rounded-lg shadow-lg p-6 md:w-72 bg-white hover:bg-green-100 md:transform md:scale-y-110 flex flex-col justify-between transition-transform transform hover:scale-x-110 hover:scale-y-125  duration-500 ease-in-out"
          >
            <h3 className="text-2xl font-bold mb-2">-Premium-</h3>
            <ul className="text-gray-600 mb-6 list-disc text-left pl-9 mt-3 font-medium flex-grow">
              <li>6 month access.</li>
              <li>Get community Membership</li>
              <li>Access to all Template.</li>
            </ul>
            <div className="text-4xl font-bold mb-2 text-green-500">
              $40 
            </div>
            <button  onClick={() => handleCardClick(4000)} className="w-full bg-green-400 text-gray-700 font-semibold py-2 rounded-lg hover:bg-green-700">
              Get Started
            </button>
          </div>
        </div>

          {/* Business */}
          <div data-aos-delay="100"
          data-aos-duration="1000"
          data-aos="flip-left"
          className='hover:z-10'>
            
        <div 
          
          className="lg:border-2 lg:border-green-500 rounded-lg shadow-lg p-6 md:w-72 bg-white hover:bg-green-100 flex flex-col justify-between transition-transform transform hover:scale-x-110 hover:scale-y-125 hover:z-10 duration-500 ease-in-out"
        >
          <h3 className="text-2xl font-bold mb-2">-Business-</h3>
          <ul className="text-gray-600 mb-6 list-disc text-left pl-9 mt-3 font-medium flex-grow">
            <li>3 month access.</li>
            <li>Get community Membership</li>
            <li>Access to all Template.</li>
          </ul>
          <div className="text-4xl font-bold mb-2 text-green-500">
            $30
          </div>
          <button  onClick={() => handleCardClick(3000)} className="w-full bg-green-400 text-gray-700 font-semibold py-2 rounded-lg hover:bg-green-700">
            Get Started
          </button>
        </div>
        </div>
        </div>

        {selectedAmount && (
          <div className="bg-green-300 rounded-sm mx-3 md:mx-40 mt-12 md:mt-8 lg:px-10 md:pt-12 text-center">
            <h3 className="text-3xl text-gray-700 font-bold pt-3 md:pt-0">Proceed to Checkout</h3>
            <p className="text-lg mt-2 text-gray-700">
              Your Selected Service is:{" "}
              <strong className="text-2xl"> {selectedAmount === 2000 
    ? "Basic" 
    : selectedAmount === 4000 
    ? "Premium" 
    : "Business"}</strong>
            </p>
            <Elements stripe={stripePromise}>
              <CheckOutFrom amount={selectedAmount}></CheckOutFrom>
            </Elements>
          </div>
        )}
      </div>

</div>
  );
};

export default Payment;
