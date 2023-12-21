/* eslint-disable react/prop-types */


const Menu = ({item}) => {
const {name,recipe,image,price} = item;
  return (
    <div className=" flex gap-4 dark:text-white">
      <img src={image} className="w-32 rounded-r-full rounded-bl-full" alt="" />
      <div className="w-full space-y-2">
        <div className="flex items-center gap-4 w-full">
        <p className="text-2xl">{name}</p>
        <hr className="border border-dashed border-black  flex-grow"/>
        <p className="text-xl text-yellow-500">{price}</p>
        </div>
        <p className="w-9/12 text-gray-400">{recipe}</p>
      </div>
    </div>

  )
}

export default Menu