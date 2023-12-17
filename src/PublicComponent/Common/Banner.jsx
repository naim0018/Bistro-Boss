/* eslint-disable react/prop-types */
import bannerimg from '../../assets/menu/banner3.jpg'

const Banner = ({heading,para }) => {
  return (
    <div className='relative'>
        <img src={bannerimg} alt="" />
        <div className="absolute inset-0 flex flex-col  items-center justify-center w-[1320px] h-[450px] bg-neutral-900 bg-opacity-60 uppercase gap-4 m-auto text-white">
        <h2 className="text-white text-[88px] font-bold font-['Cinzel']">{heading}</h2>
        <p className="text-center text-white text-2xl font-semibold font-['Cinzel']">{para}</p>
        </div>
    </div>
  )
}

export default Banner