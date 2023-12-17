import { FaFacebookF } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
const Footer = () => {
  return (
    <div>
      <footer className="footer gap-0 bg-base-200 text-white ">
        <div className="  w-full h-full bg-[#1F2937] place-items-center p-14   ">
          <h2 className="text-2xl  uppercase">Contact Us</h2>
          <p className="">123 ABS Street, Uni 21, Bangladesh</p>
          <p>+00 123456789</p>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat-Sun: 10:00 - 23:00</p>
        </div>
        <div className=" place-content-center h-full w-full   bg-[#111827] space-y-4">
          <h2 className="text-2xl ">Follow Us</h2>
          <p className="">Join us on social media</p>
          <div className="flex gap-4 text-3xl">
            <FaFacebookF /> <SlSocialInstagram /> <TiSocialTwitter />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
