import React from 'react';
import bgimg from '../../../assets/chef-service.jpg';


const AboutUs = () => {
  return (
    <div className="relative container mx-auto">
      <img className="w-full h-full object-cover" src={bgimg} alt="Background" />
      <div className=" absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50 ">
        <div className='bg-white w-4/5 px-14 py-20 text-black dark:bg-black dark:bg-opacity-20 dark:text-white dark:text-opacity-80'>
          <h2 className="text-5xl font-bold mb-4">Bistro Bosss</h2>
          <p className='w-3/4 mx-auto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ex laboriosam
            voluptatem minus dolores dolore repudiandae earum eligendi maxime aperiam. Similique,
            incidunt veritatis! ipsum dolor sit amet consectetur adipisicing elit. Quo, deleniti.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
