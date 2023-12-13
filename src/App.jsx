import { Outlet } from "react-router-dom"

import Navbar from "./PublicComponent/Navbar/Navbar"
import Footer from "./PublicComponent/Footer/Footer"




function App() {

  return (
    <div className="bg-white dark:bg-gray-800 h-full">
      <div className="">

      <Navbar/>
      </div>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
