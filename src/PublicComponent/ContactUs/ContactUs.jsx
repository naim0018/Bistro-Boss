import Banner from "../Common/Banner";
import img from "../../assets/contact/banner.jpg"
import Location from "./Location/Location";
import ContactForm from "./ContactForm/ContactForm";

const ContactUs = () => {
    return (
        <div>
            <Banner img={img} heading={"contact Us"} description={'Would you like to try a dish'} hero={true}/>
            <Location/>
            <ContactForm/>
        </div>
    );
};

export default ContactUs;