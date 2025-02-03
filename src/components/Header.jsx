import { Link } from "react-router-dom"
import  "../styles/Header.footer.scss";
import React from "react";

export default function Header(){
    return(
        <>
             <header className="">
                <div className="logo">
                    <h2>M_List</h2>
                </div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/user/22">About</Link>
                </nav>
            </header>
        </>
    )
    }