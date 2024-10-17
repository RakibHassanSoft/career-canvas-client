import { Elements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";

const Payment = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
  const handleCardClick = (amount) => {
    setSelectedAmount(amount);
  };
  const formatAmount = (amount) => (amount / 100).toFixed(2);
  return (
    <div>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Select a Premium Service
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Premium Plan 1 */}
          <div
            onClick={() => handleCardClick(1000)}
            className={`border p-6 rounded-lg shadow-lg transition transform hover:scale-105 cursor-pointer ${
              selectedAmount === 1000 ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">Premium Plan 1</h3>
            <p className="text-lg text-gray-600 mb-4">
              Enjoy basic premium features for{" "}
              <span className="text-neutral-700 font-bold">1Month</span>
            </p>
            <p className="text-xl font-bold">$10.00</p>
          </div>

          {/* Premium Plan 2 */}
          <div
            onClick={() => handleCardClick(2000)}
            className={`border p-6 rounded-lg shadow-lg transition transform hover:scale-105 cursor-pointer ${
              selectedAmount === 2000 ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">Premium Plan 2</h3>
            <p className="text-lg text-gray-600 mb-4">
              Access to additional features for{" "}
              <span className="text-neutral-700 font-bold"> 6 Month</span>
            </p>
            <p className="text-xl font-bold">$20.00</p>
          </div>

          {/* Premium Plan 3 */}
          <div
            onClick={() => handleCardClick(5000)}
            className={`border p-6 rounded-lg shadow-lg transition transform hover:scale-105 cursor-pointer ${
              selectedAmount === 5000 ? "border-blue-500" : "border-gray-300"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-4">Premium Plan 3</h3>
            <p className="text-lg text-gray-600 mb-4">
              Unlock all premium features for{" "}
              <span className="text-neutral-700 font-bold">1Year</span>
            </p>
            <p className="text-xl font-bold">$50.00</p>
          </div>
        </div>

        {selectedAmount && (
          <div className="mt-8">
            <h3 className="text-xl font-bold">Proceed to Checkout</h3>
            <p className="text-lg">
              You have selected a subscription period of:{" "}
              <strong>{formatAmount(selectedAmount)}</strong>
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
