/* eslint-disable react/prop-types */


const Menu = ({item}) => {
    console.log(item)
const {name,recipe,image,price} = item;
  return (
    <div className="flex items-stretch border gap-4 w-full flex-shrink-0">
    <img src={image} alt="" className="w-[118px] h-[104px] rounded-tr-[200px] rounded-bl-[200px] rounded-br-[200px]"/>
    <div className="">
        <div className="w-full flex items-center gap-5">
            <p className="text-xl dark:text-gray-300 font-normal uppercase">{name}</p>
            <span className="flex-grow border border-dashed border-gray-600"></span>
            <p className="text-xl text-yellow-600">${price}</p>
        </div>
        <p className="w-4/5 text-gray-500">{recipe}</p>
    </div>
</div>
  )
}

export default Menu