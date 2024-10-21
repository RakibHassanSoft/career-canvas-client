
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Premium_Membership = () => {
  const benefits = [
    'Access to premium content',
    'Priority customer support',
    'Special discounts on products',
    'Early access to new features',
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10">
      {/* Animated Heading */}
      <h1 className="text-5xl font-bold text-green-600 mb-12 animate-pulse">
        Premium Membership
      </h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full max-w-6xl">
        {/* Membership Info */}
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <FaCheckCircle className="text-green-600 text-2xl mr-3" />
              <h2 className="text-xl font-semibold text-green-700">
                {benefit}
              </h2>
            </div>
            <p className="text-gray-600">
              Unlock the power of our premium services and elevate your
              experience with exclusive benefits.
            </p>
          </div>
        ))}
      </div>

      {/* Purchase Button */}
      <div className="mt-10">
       <Link to={'/dashboard/payment'}> <button className="bg-green-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-green-700 transition transform hover:scale-105 duration-300">
          Get Premium
        </button></Link>
      </div>
    </div>
  );
};

export default Premium_Membership;
