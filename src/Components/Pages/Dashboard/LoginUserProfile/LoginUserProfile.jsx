import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Typewriter } from 'react-simple-typewriter'
import useAdmin from '../../../../Hooks/useAdmin';

const LoginUserProfile = () => {
  
    const {user}=useContext(AuthContext)
    const {isAdmin}=useAdmin()
    console.log(isAdmin)
    console.log(user)

    return (
        <div className='md:min-h-[500px] pb-10 bg-gradient-to-r from-green-400 via-teal-300 to-green-600 text-center rounded-xl'>
            <h1 className='pt-10 text-2xl md:text-4xl text-gray-600 '>Hey <span>{user?.displayName}</span> 
            <span className='text-sky-500'>
            <Typewriter 
        
        words={[' Welcome Here!!' ]}
        loop={5}
        cursor
        cursorStyle='_'
        typeSpeed={90}
        deleteSpeed={50}
        delaySpeed={1300}
        ></Typewriter></span></h1>
        <div className='mt-9 border-2  border-white mx-2 md:mx-20 lg:mx-96 p-2 md:p-6
        '>
 <div className='flex justify-center'>
 {user?.photoURL ? (
    <img src={user.photoURL} alt="User Avatar" className="w-24  rounded-full" />
  ) : (
    <div className="avatar">
      <div className="w-36 h-36 rounded-full">
        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Default Avatar" />
      </div>
    </div>
  )}
 </div>
 <div className='text-left md:px-6 lg:px-24'>
 <h1 className='te xt-lg md:text-2xl mt-4 text-white'> Name: <span className='text-gray-600 text-xl md:text-3xl'> {user?.displayName}.</span></h1>
  <h1 className='te xt-lg md:text-2xl mt-4 text-white'> Email: <span className='text-gray-600 text-lg md:text-3xl'> {user?.email}.</span></h1>
  <h1>
  {isAdmin ? (
        <h1 className='te xt-lg md:text-2xl mt-4 text-white'> Role: <span className='text-gray-600 text-xl md:text-3xl'> Admin.</span></h1>
      ) : (
        <h1 className='te xt-lg md:text-2xl mt-4 text-white'> Role: <span className='text-gray-600 text-xl md:text-3xl'> User.</span></h1>
      )}
  </h1>
 </div>
</div>
        </div>
    );
};

export default LoginUserProfile;