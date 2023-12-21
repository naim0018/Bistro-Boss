import SectionTitle from "../../Common/SectionTitle"
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

const Location = () => {
  return (
    <div>
        <SectionTitle subHeading={'Visit Us'} heading={'Our Location'}/>
        <div className="container mx-auto border grid md:grid-cols-3 place-items-center ">
            <div className="w-full mx-5 p-3 border bg-[#D1A054]">
            <BsFillTelephoneFill className="text-4xl  mx-auto"/>
            </div>
            <div className="w-full mx-5 p-3 border bg-[#D1A054]">
            <FaLocationDot className="text-4xl  mx-auto"/>
            </div>
            <div className="w-full mx-5 p-3 border bg-[#D1A054]">
            <FaClock className="text-4xl  mx-auto"/>
            </div>
        </div>
    </div>
  )
}

export default Location