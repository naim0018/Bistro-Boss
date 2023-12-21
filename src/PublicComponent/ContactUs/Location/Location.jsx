import SectionTitle from "../../Common/SectionTitle";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

const Location = () => {
  return (
    <div>
      <SectionTitle subHeading={"Visit Us"} heading={"Our Location"} />
      <div className="container mx-auto  grid md:grid-cols-3 place-items-center gap-10 my-20">
        <div className="w-full h-80 flex flex-col">
          <div className="p-3 bg-[#D1A054]">
          <BsFillTelephoneFill className="text-4xl  mx-auto" />
          </div>
          <div className="flex-grow border text-center bg-zinc-100 mx-5 flex flex-col justify-center">
              <p className="uppercase
               text-neutral-900 text-2xl font-medium font-['Inter'] ">PHONE</p>
              <p className="text-neutral-700 text-base font-normal font-['Inter']">+38 (012) 34 56 789</p>
          </div>
        </div>
        
        <div className="w-full h-80 flex flex-col">
          <div className="p-3 bg-[#D1A054]">
          <FaLocationDot className="text-4xl  mx-auto" />
          </div>
          <div className="flex-grow border text-center bg-zinc-100 mx-5 flex flex-col justify-center">
              <p className="uppercase
               text-neutral-900 text-2xl font-medium font-['Inter'] ">ADDRESS</p>
              <p className="text-neutral-700 text-base font-normal font-['Inter']">+38 (012) 34 56 789</p>
          </div>
        </div>
          
        <div className="w-full h-80 flex flex-col">
          <div className="p-3 bg-[#D1A054]">
          <FaClock className="text-4xl  mx-auto" />
          </div>
          <div className="flex-grow border text-center bg-zinc-100 mx-5 flex flex-col justify-center">
              <p className="uppercase
               text-neutral-900 text-2xl font-medium font-['Inter'] ">WORKING HOURS</p>
              <p className="text-neutral-700 text-base font-normal font-['Inter']">Mon - Fri: 08:00 - 22:00</p>
              <p className="text-neutral-700 text-base font-normal font-['Inter']">Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Location;
