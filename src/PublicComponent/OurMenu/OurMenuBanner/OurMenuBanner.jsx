import Banner from "../../Common/Banner"
import img from '../../../assets/menu/banner3.jpg'

const OurMenuBanner = () => {
  return (
    <div>
        <Banner img={img} heading={'Our Menu'} description={'Would you like to try a dish?'} hero={true}/>
    </div>
  )
}

export default OurMenuBanner