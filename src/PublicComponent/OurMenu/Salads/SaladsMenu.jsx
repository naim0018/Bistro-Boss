import useMenuData from "../../../hooks/useMenuData"
import Menu from "../../Common/Menu";


const SaladsMenu = () => {
    const {datalist , error , isLoading} = useMenuData();
    if(isLoading){
      <p>Loading</p>
    }
    
    if(error){
      console.log(error.message)
    }
    const salad = datalist?.filter(item=> item.category === "salad")
  return (
    <div className="grid md:grid-cols-2 gap-5 container mx-auto my-20">
        {
            salad?.map(item => <Menu key={item._id} item={item}/>)
        }
    </div>
  )
}

export default SaladsMenu