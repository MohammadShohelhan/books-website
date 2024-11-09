import { Outlet } from "react-router-dom"
import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"


const Root = () => {
  return (
    <div className="w-full">
      
     
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-332px)] bg-transparent w-[100%] ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      
    </div>
  )
}

export default Root