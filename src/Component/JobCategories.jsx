import React from 'react';

const JobCategories = ({category}) => {
    return (
      
 <div className="bg-purple-100 p-4">
 <img src={category.logo} alt="job-catagories-cover" className="mb-5"/>
 <h4 className="text-base font-sans font-semibold">{category.name}</h4>
  <p className="text-gray-700 font-sans font-semibold ">{category.jobsAvailable} Jobs Available</p>
</div>
    );
};

export default JobCategories;


