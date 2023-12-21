import Banner from "../../Common/Banner"
import img from '../../../assets/menu/salad-bg.jpg'
import SaladsMenu from "./SaladsMenu"
import OrderButton from "../../Common/OrderButton"

const Salads = () => {
  return (
    <div>
        <Banner img={img} heading={'Salads'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} hero={false}/>
        <SaladsMenu/>
        <OrderButton/>
    </div>
  )
}

export default Salads