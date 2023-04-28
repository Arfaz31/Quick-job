import React from 'react';
import image from '../assets/All Images/P3OLGJ1 copy 1.png'
const Home = () => {
    return (
        <div className='my-container flex flex-col items-center justify-between lg:flex-row'>
          <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
           
         <h1 className='text-6xl font-medium tracking-wide leading-tight mb-5'>One Step 
         <br />
         Closer To Your 
         <br /> 
         <span className='inline-block text-blue-400'>Dream Job</span> 
         </h1>
          <p className='text-base text-gray-700 md:text-lg'>
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <p className='btn mt-6'>Get Started</p>
        </div> 

        <div className='relative w-1/2 left-10'>
            <img className='' src={image} alt="" />
        </div>
        </div>
    );
};

export default Home;