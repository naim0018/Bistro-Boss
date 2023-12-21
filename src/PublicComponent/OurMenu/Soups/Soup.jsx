import Banner from "../../Common/Banner"
import img from "../../../assets/menu/soup-bg.jpg"
import SoupMenu from "./SoupMenu"
import OrderButton from "../../Common/OrderButton"
const Soup = () => {
  return (
    <div>
        <Banner img={img} heading={'Soups'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>
        <SoupMenu/>
        <OrderButton/>
    </div>
  )
}

export default Soup