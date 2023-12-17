import AboutUs from "../AboutUs/AboutUs";
import Banner from "../HomeBanner/HomeBanner";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import FromOurMenu from "../FromMenu/FromOurMenu";
import Menulist from "../MenuList/Menulist";
import OnlineOrder from "../OnlineOrderSection/OnlineOrder";
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {
    return (
        <div className="">
            <Banner/>
            <OnlineOrder/>
            <AboutUs/>
            <Menulist/>
            <ChefRecommends/>
            <FromOurMenu/>
            <Testimonials/>
        </div>
    );
};

export default Home;