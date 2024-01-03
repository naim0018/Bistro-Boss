import useMenuData from "../../../hooks/useMenuData";
import Menu from "../../Common/Menu";

const PizzaMenu = () => {
  const {datalist , error ,isLoading } = useMenuData()
  if(isLoading){
    <p>Loading</p>
  }
  if(error){
    console.log(error.message)
  }
  
  const pizza = datalist?.filter((item) => item.category === "pizza");
  return (
    <div className="grid md:grid-cols-2 gap-5 container mx-auto my-20">
      {pizza?.slice(0,6).map((item) => (
        <Menu key={item._id} item={item} />
      ))}
    </div>
  );
};

export default PizzaMenu;
