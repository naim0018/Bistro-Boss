import useMenuData from "../../../hooks/useMenuData"
import Menu from "../../Common/Menu";

const SoupMenu = () => {
    const {datalist,error,isLoading} =useMenuData();
    if(isLoading){
      <p>Loading</p>
    }
    
    if(error){
      console.log(error.message)
    }
    const soup = datalist?.filter(item=> item.category === 'soup')
  return (
    <div className="grid md:grid-cols-2 gap-5 container mx-auto my-20">
        {
            soup?.map(item => <Menu key={item._id} item={item} />)
        }
    </div>
  )
}

export default SoupMenu