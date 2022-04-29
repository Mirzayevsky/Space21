import React, { lazy,Suspense } from "react";
import {Routes,Route } from "react-router-dom";
import Navbar from "../Components/Navigationbar/navigationbar"
import Home from "../Components/Home/Main/home"
import Work from "../Components/WorkPage/Workpage"
import About from "../Components/About Page/About"
import FooterTop from "../Components/Footer Top/FooterTop"
import Footer from "../Components/Footer/Footer"
// Pages
// const Navbar  = lazy(()=> import("../Components/Navigationbar/navigationbar"))
// const Home  = lazy(()=> import("../Components/Home/Main/home"))
// const Footer = lazy(()=> import("../Components/Footer/Footer"))
// const FooterTop  = lazy(()=> import("../Components/Footer Top/FooterTop"))
// const Work  = lazy(()=> import("../Components/WorkPage/Workpage"))
// const About  = lazy(()=> import("../Components/About Page/About"))

//  Routes
const routes = [
    { path: "/", name: "home", Component: Home  },
    { path: "/work", name: "Work", Component: Work},
    { path: "/about", name: "About", Component: About},
];

const Pages = () => {
   
    return (
          <>
                {/* <Suspense fallback={<div>Loading...</div>}> */}
                    <Navbar/>
                            {routes.map(({path,Component})=>(
                                <Routes  key={path}>
                                    <Route  exact path={path} element={<Component/>}/>
                                </Routes>
                                ))
                            }
                    <FooterTop/> 
                    <Footer/>
                {/* </Suspense> */}
          </>
    )
}
export default Pages;