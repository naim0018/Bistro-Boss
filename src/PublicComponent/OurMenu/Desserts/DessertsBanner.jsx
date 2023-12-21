
import Banner from '../../Common/Banner'
import img from '../../../assets/menu/dessert-bg.jpeg'
import DessertsMenu from './DessertsMenu'
import OrderButton from '../../Common/OrderButton'

const DessertsBanner = () => {
  return (
    <div className='my-20'>
        <Banner img={img} heading={'Desserts'} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, error.'} hero={false}/>
        <DessertsMenu/>
        <OrderButton/>
    </div>
  )
}

export default DessertsBanner