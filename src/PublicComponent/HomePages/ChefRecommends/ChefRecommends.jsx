import useMenuData from "../../../hooks/useMenuData"
import Cards from "../../Common/Cards";
import SectionTitle from "../../Common/SectionTitle"


const ChefRecommends = () => {
    const data =useMenuData();
    const saladData = data?.filter(item=> item.category === 'salad').slice(0,3)
    console.log(saladData)
  return (
    <div className="container mx-auto">
        <div className="">
            <SectionTitle subHeading={'Should Try'} heading={'Chef Recommends'} />
        </div>
        <div className="grid grid-cols-3 my-20">
            {
                saladData?.map(item=> <Cards key={item._id} item={item}/>)
            }
        </div>
    </div>
  )
}

export default ChefRecommends