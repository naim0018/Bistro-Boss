import Banner from "../Common/Banner";
import img from "../../assets/contact/banner.jpg"
import Location from "./Location/Location";

const ContactUs = () => {
    return (
        <div>
            <Banner img={img} heading={"contact Us"} description={'Would you like to try a dish'} hero={true}/>
            <Location/>
        </div>
    );
};

export default ContactUs;