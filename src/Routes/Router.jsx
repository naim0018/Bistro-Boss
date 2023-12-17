import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../PublicComponent/HomePages/Home/Home"
import ContactUs from "../PublicComponent/ContactUs/ContactUs"
import DashBoard from "../PublicComponent/DashBoard/DashBoard"
import OurShop from "../PublicComponent/OurShop/OurShop"
import OurMenu from "../PublicComponent/OurMenu/OurMenu/OurMenu"

export const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/contactus',
                element:<ContactUs/>
            },
            {
                path:'/dashboard',
                element:<DashBoard/>
            },
            {
                path:'/ourmenu',
                element:<OurMenu/>
            },
            {
                path:'/ourshop',
                element:<OurShop/>
            }

        ]
    }
])