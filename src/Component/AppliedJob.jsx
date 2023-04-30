import React, { useEffect, useState } from 'react';

import banner from '../assets/All Images/Vector-1.png'
import { Link } from 'react-router-dom';
import { getShoppingCart } from './utils/fakeDB';

const AppliedJob = () => {
  
    const [jobLoad, setjobLoad] =useState([])
    console.log(jobLoad)
    const [jobCardSet, setjobCardSet] = useState([])
    console.log(jobCardSet)
  
    useEffect(()=>{
      fetch('jobfeatures.json')
      .then(res=> res.json())
      .then(data=> setjobLoad(data))
    },[])
  
    useEffect(()=>{
      const storeCart = getShoppingCart ()
      const saveJob =[]
      for (const id in storeCart){
          const addedJob= jobLoad.find(jobCard => jobCard.id === id)
          if(addedJob){
            const quantity = addedJob[id]
            addedJob.quantity = quantity;
            saveJob.push(addedJob)
          }
        }
  
        setjobCardSet(saveJob)
    },[jobLoad])
  

   

    return (
        <div>
      <div className="bg-gray-100  flex flex-col items-center lg:flex-row  mb-10 ">
      <img src={banner} alt="" />
      <h1 className="text-center text-4xl font-bold  p-10 mt-6 lg:mx-16">Applied job here</h1>
       
      </div>
      
         <div className="flex justify-center lg:justify-end lg:mr-44 space-x-6 mb-6" >
             <button  className="mt-4   inline-flex items-center h-9 px-4  font-medium text-white transition duration-200 rounded shadow-md  md:mb-0 bg-indigo-600 hover:bg-blue-700">Remote</button>
             <button  className="mt-4   inline-flex items-center h-9 px-4  font-medium text-white transition duration-200 rounded shadow-md  md:mb-0 bg-indigo-600 hover:bg-blue-700">Onsite</button>
         </div>
        
      

      <div>
        {jobCardSet.map((jobCart) => (
             <div className=" lg:mx-16 py-6  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-6">
            <div className="flex flex-col items-center lg:flex-row border p-8 ">
              <div className="p-6 bg-slate-100 mx-4">
               <img src={jobCart.companyLogo} alt="company logo" className="sm:inset-0"/>
             </div>
             <div className="p-6">
               <h1 className="text-lg font-sans font-bold">{jobCart.jobTitle}</h1>
               <h1 className="mt-2 text-base font-sans font-semibold text-gray-600"></h1>
               <div className="flex">
                 <button className="border-2 border-indigo-500 mr-4 mt-2 p-1 px-2 text-indigo-500">
                   {jobCart.remoteOrOnsite}
                 </button>
                 <button className="border-2 border-indigo-500 mr-4 mt-2 p-1 px-2 text-indigo-500">
                 {jobCart.fullTimeOrPartTime}
                 </button>
            </div>
               <div className="flex">
                      <h1 className="mt-2 mr-8 text-base font-sans font-semibold text-gray-600">{jobCart.location}</h1>
                      <h4 className="mt-2  text-base font-sans font-semibold text-gray-600">{jobCart.salary}</h4>
                    </div>
             </div>

             <div className="lg:ml-36">
                 <Link to={`../job/${jobCart.id}`}>
                 <button className="mt-4   inline-flex items-center h-9 px-4  font-medium text-white transition duration-200 rounded shadow-md  md:mb-0 bg-indigo-600 hover:bg-blue-700">View Details</button>
                 </Link>
              </div>
              </div>            
                   
             </div>
          
        ))}
      </div>
    </div>
        
    );
};

export default AppliedJob;



{/*


*/}