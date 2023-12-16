import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import FromOurMenu from "../FromMenu/FromOurMenu";
import Menulist from "../MenuList/Menulist";

import OnlineOrder from "../OnlineOrderSection/OnlineOrder";



const Home = () => {
    return (
        <div className="">
            <Banner/>
            <OnlineOrder/>
            <AboutUs/>
            <Menulist/>
            <ChefRecommends/>
            <FromOurMenu/>
        </div>
    );
};

export default Home;