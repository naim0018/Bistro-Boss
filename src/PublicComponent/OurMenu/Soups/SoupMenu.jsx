import useMenuData from "../../../hooks/useMenuData"
import Menu from "../../Common/Menu";

const SoupMenu = () => {
    const data =useMenuData();
    const soup = data?.filter(item=> item.category === 'soup')
  return (
    <div className="grid md:grid-cols-2 gap-5 container mx-auto my-20">
        {
            soup?.map(item => <Menu key={item._id} item={item} />)
        }
    </div>
  )
}

export default SoupMenu