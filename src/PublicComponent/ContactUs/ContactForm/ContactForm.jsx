
import SectionTitle from '../../Common/SectionTitle'
import { FaTelegramPlane } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div>
      <SectionTitle subHeading={'Send Us a Message'} heading={'Contact Form'}/>
      <div className="h-screen">
      <div className="container mx-auto p-10 space-y-5 grid bg-zinc-100 ">
        <div className=" flex justify-center gap-8 ">
            <div className="w-full space-y-2">
            <p>Name*</p>
            <input type="text" placeholder='Enter your name' className='w-full bg-white rounded-lg border border-gray-200 p-3'/>
            </div>
            <div className="w-full space-y-2">
            <p>Email*</p>
            <input type="email" placeholder='Enter your email' className='w-full bg-white rounded-lg border border-gray-200 p-3'/>
            </div>
        </div>
        <div className="space-y-4">
            <div className="space-y-2">
                <p>Phone*</p>
                <input type="number" placeholder='Enter your phone number' className='w-full bg-white rounded-lg border border-gray-200 p-3' p/>
            </div>
            <div className="space-y-2">
                <p>Message*</p>
                <textarea placeholder='Write your message here' className='w-full bg-white rounded-lg border border-gray-200 p-3'/>
            </div>
        </div>
        <button className="place-self-center btn border-none rounded-none bg-gradient-to-r from-yellow-800 to-yellow-600 text-white text-xl font-bold font-['Inter']">Send Message <FaTelegramPlane /></button>
      </div>
      </div>
    </div>
  )
}

export default ContactForm
