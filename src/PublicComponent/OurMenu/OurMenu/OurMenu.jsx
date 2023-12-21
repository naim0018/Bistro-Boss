import DessertsBanner from "../Desserts/DessertsBanner"
import OurMenuBanner from "../OurMenuBanner/OurMenuBanner"
import PizzaBanner from "../Pizza/PizzaBanner"
import Salads from "../Salads/Salads"
import Soup from "../Soups/Soup"
import TodaysOffer from "../TodaysOffer/TodaysOffer"


const OurMenu = () => {
  return (
    <div>
      <OurMenuBanner/>
     <TodaysOffer/>
     <DessertsBanner/>
     <PizzaBanner/>
     <Salads/>
     <Soup/>
    </div>
  )
}

export default OurMenu