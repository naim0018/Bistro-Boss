
import useMenuData from '../../../hooks/useMenuData'
import Menu from '../../Common/Menu'
import OrderButton from '../../Common/OrderButton'
import SectionTitle from '../../Common/SectionTitle'

const TodaysOffer = () => {
    const menuData = useMenuData()?.slice(0,4)
    // ?.slice(0,9)
    
  return (
    <div className="container mx-auto my-20">
        <div className="">
            <SectionTitle subHeading={"Dont't miss"} heading={"Today's Offer"} />
        </div>
    <div className=' grid md:grid-cols-2 gap-10'>
        {
            menuData?.map(item=> <Menu key={item._id} item={item} />)
        }
    </div>
    <OrderButton/>
    </div>
  )
}

export default TodaysOffer