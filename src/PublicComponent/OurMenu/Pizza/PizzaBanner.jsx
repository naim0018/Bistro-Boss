import Banner from '../../Common/Banner'
import img from '../../../assets/menu/pizza-bg.jpg'
import PizzaMenu from './PizzaMenu'
import OrderButton from '../../Common/OrderButton'
const PizzaBanner = () => {
  return (
    <div>
        <Banner img={img} heading={'Pizza'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} hero={false} />
        <PizzaMenu/>
        <OrderButton/>
    </div>
  )
}

export default PizzaBanner