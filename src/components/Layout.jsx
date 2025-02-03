import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import React from "react";

export default function Layout({children}){
    return(
        <>  
           <Header />
           <main>
           <Outlet />
           </main>
            <Footer />
        </>
    )
    }