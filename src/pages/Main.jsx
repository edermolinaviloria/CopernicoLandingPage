import { Footer } from "../components/Footer";
import { SideBar } from "../components/SideBar"
import { Link, Outlet } from "react-router-dom";



export const Main = () => {

     return (
          <>
          <SideBar/>
          <Outlet/>
          <Footer/>
          </>
     )

}