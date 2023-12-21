import img from '../../assets/shop/banner2.jpg'
import Banner from '../Common/Banner';
 const OurShop = () => {
  return (
  <div className="">
    <Banner img={img} heading={"Our Shop"} description={'Would you like to try a dish?'} hero={true}/> 
  </div>
    
  );
};
export default OurShop;