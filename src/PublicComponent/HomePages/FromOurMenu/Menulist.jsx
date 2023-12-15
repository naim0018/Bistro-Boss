import useMenuData from "../../../hooks/useMenuData"
import Menu from "../../Common/Menu";
import SectionTitle from "../../Common/SectionTitle"


const Menulist = () => {
    const menuData=useMenuData();
    const menuPopular = menuData?.filter(item => item.category === 'popular')
    console.log(menuData, menuPopular)
  return (
    <div className="container mx-auto">
        <div className="">
            <SectionTitle subHeading={'Check it Out'} heading ={'From Our Menu'} />
        </div>
        <div className="grid mb-20 gap-10">
            <div className="grid grid-cols-2 gap-10 ">
            {
                menuPopular?.map(item => <Menu key={item._id} item={item}/>)
            }
            </div>
            <button className="uppercase btn btn-ghost shadow-lg place-self-center dark:bg-gray-400 dark:text-black">View Full Menu</button>
        </div>


        {/* Call US */}
        <div className="bg-gray-800 dark:text-gray-300 dark:border text-white p-16 text-center text-5xl italic my-20"><p>Call Us : ++880 01201201201</p></div>
    </div>
  )
}

export default Menulist