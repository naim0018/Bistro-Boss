
import useMenuData from '../../../hooks/useMenuData'
import Menu from '../../Common/Menu'
import SectionTitle from '../../Common/SectionTitle'

const TodaysOffer = () => {
    const menuData = useMenuData()
    // ?.slice(0,9)
    
    console.log(menuData)
  return (
    <div className="container mx-auto">
        <div className="">
            <SectionTitle subHeading={"Dont't miss"} heading={"Today's Offer"} />
        </div>
    <div className=' grid grid-cols-2 gap-10'>
        {
            menuData?.map(item=> <Menu key={item._id} item={item} />)
        }
    </div>
    </div>
  )
}

export default TodaysOffer