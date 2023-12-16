import feature from "../../../assets/featured.jpg";
const FromOurMenu = () => {
  return (
    <div className="my-20 relative ">
        
      <img src={feature} alt="" className=" w-full h-[840px] " />
        <div className="bg-black opacity-40 inset-0 absolute"></div>
      <div className=" absolute z-1 inset-0  w-full">
        
          <div className="text-center w-2/4 mx-auto my-20">
            <p className="italic text-yellow-500">- - - CheckOut - - -</p>
            <hr className="w-2/4 mx-auto text-gray-300 my-5 border border-gray-300" />
            <h1 className="text-4xl font-normal text-white dark:text-white uppercase">
              From Our Menu
            </h1>
            <hr className="w-2/4 mx-auto text-gray-300 my-5 border border-gray-300" />
          </div>
        <div className="grid grid-cols-2  items-center w-3/4 mx-auto">
            <img src={feature} alt="" className="w-11/12" />
            <div className=" text-white">
                <p className="text-lg">March 20, 2023</p>
                <p className="uppercase text-xl">Where Can i Get Some ?</p>
                <p className="w-5/6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus obcaecati dolore magnam atque mollitia odio eum voluptas aperiam illo sapiente ipsa distinctio possimus, nobis eos dolor veritatis quod. Aperiam, corporis.</p>
            </div>
        </div>
       
      </div>
    </div>
  );
};

export default FromOurMenu;
