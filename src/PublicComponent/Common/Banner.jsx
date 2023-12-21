/* eslint-disable react/prop-types */

import { useState } from "react"


const Banner = ({img,heading,description,hero }) => {
  const [banner] = useState(hero)
  return (
    <div className='relative'>

        {
          <img src={img} alt="" className={banner ? 'w-full h-[800px]' : 'w-full h-[600px]'} />
        } 

        <div className="absolute inset-0 flex flex-col  items-center justify-center w-3/5 h-1/2 bg-neutral-900 bg-opacity-60 uppercase gap-4 m-auto text-white">
          {
            <h2 className={banner ? "text-white text-[88px] font-bold font-['Cinzel']" : "text-white text-[45px] font-bold font-['Cinzel']"}>{heading}</h2>
          }
        <p className={banner ? "text-center text-white text-2xl font-semibold font-['Cinzel']" : "text-center text-white text-base normal-case font-['Cinzel']"}>{description}</p>
        </div>
    </div>
  )
}

export default Banner