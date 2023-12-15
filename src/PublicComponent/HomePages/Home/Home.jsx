import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Menulist from "../FromOurMenu/Menulist";
import OnlineOrder from "../OnlineOrderSection/OnlineOrder";



const Home = () => {
    return (
        <div className="">
            <Banner/>
            <OnlineOrder/>
            <AboutUs/>
            <Menulist/>
            <ChefRecommends/>
        </div>
    );
};

export default Home;