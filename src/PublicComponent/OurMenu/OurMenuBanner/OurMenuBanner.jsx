import Banner from "../../Common/Banner"


const OurMenuBanner = () => {
  return (
    <div>
        <Banner heading={'Our Menu'} para={'Would you like to try a dish?'}/>
        <button className=" inline-flex items-start gap-[10px] px-[30px] py-[20px] relative rounded-[8px] border-b-[3px] [border-bottom-style:solid] border-gray-800">
      <div className=" relative w-fit mt-[-3.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-gray-800 text-[20px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
        ORDER YOUR FAVOURITE FOOD
      </div>
    </button>
    </div>
  )
}

export default OurMenuBanner