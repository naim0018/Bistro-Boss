/* eslint-disable react/prop-types */
const Cards = ({item}) => {
    const {image, name, recipe} = item;
  return (
    <div className="shadow-lg shadow-orange-100 w-[424px] space-y-8 mx-auto grid pb-10 dark:bg-slate-700 rounded-lg ">
        <img src={image} alt="" className="w-full h-[300px] rounded-t-lg"  />
        <p className="text-2xl font-medium text-center dark:text-slate-200">{name}</p>
        <p className="w-2/3 mx-auto text-center dark:text-slate-300">{recipe}</p>
        <button className="place-self-center uppercase btn hover:bg-[#E8E8E8] border-b-4 border-x-0 border-t-0 border-b-[#BB8506] bg-[#E8E8E8] text-[#BB8506] dark:shadow-slate-300 hover:bg-black">Add to Cart</button>
    </div>
  )
}

export default Cards