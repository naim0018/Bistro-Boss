/* eslint-disable react/prop-types */


const Menu = ({item}) => {
    console.log(item)
const {name,recipe,image,price} = item;
  return (
    <div className="flex items-center justify-center gap-4">
        <img src={image} alt="" className="w-1/6 rounded-r-full rounded-b-full"/>
        <div className="">
        <div className=" flex items-center  justify-between gap-4">
        <p className=" text-xl dark:text-gray-300 font-normal uppercase">{name}</p>
        <span className=" flex-grow border border-dashed border-gray-600"></span>
        <p className=" text-xl text-yellow-600">${price}</p>
        </div>
        <p className="w-4/5 text-gray-500">{recipe}</p>
        </div>
    </div>
  )
}

export default Menu