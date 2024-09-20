import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
const handleLogin =e=> {
    e.preventDefault();

    const email = e.target.email.value;
    const pass = e.target.pass.value;
   alert(email,pass)
}

const SingIn = () => {
    return (
        <div className=" flex  items-center py-3 md:py-5 lg:py-10 justify-center ">
      <div className="lg:w-full lg:max-w-6xl flex flex-col-reverse lg:flex-row bg-white shadow-lg rounded-lg  overflow-hidden">
        
        <div className="w-auto p-8">
          <h2 className="text-3xl font-semibold text-gray-700 md:mt-3 lg:mt-10 mb-1">Welcome back!</h2>
          <p className="text-gray-500">The faster you Login, The faster you can build your Resume</p>
          <form onSubmit={handleLogin} className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name='email'
                required
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
              required
                type="password"
                id="password"
                name='pass'
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-green-600 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button type='submit' className="w-full bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700">
              Sign In
            </button>
            <button className="mt-4 w-full text-green-600 bg-white border border-gray-300  font-bold py-2 px-4 rounded-lg hover:bg-green-100 flex items-center justify-center">
              <FaGoogle className='mr-3 text-green-800'></FaGoogle>
              Sign In with Google
            </button>
          </form>
          <p className="mt-4  text-center text-gray-600">
            Don’t have an account?{' '}
            <Link to={'/signup'} className='font-bold ml-2 text-lg text-green-600' >
              Sign Up
            </Link>
          </p>
        </div>
        
        <div className=" w-auto  ">
         <img className='p-4 w-full h-96 md:h-[500px] lg:h-auto ' src="https://i.ibb.co.com/ZY1WX08/Screenshot-58.png" alt="" />
         
        </div>
      </div>
    </div>
    );
};

export default SingIn;