import useMenuData from "../../../hooks/useMenuData"
import Menu from "../../Common/Menu";


const SaladsMenu = () => {
    const data = useMenuData();
    const salad = data?.filter(item=> item.category === "salad")
  return (
    <div className="grid md:grid-cols-2 gap-5 container mx-auto my-20">
        {
            salad?.map(item => <Menu key={item._id} item={item}/>)
        }
    </div>
  )
}

export default SaladsMenu