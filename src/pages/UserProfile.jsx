import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
export default function UserProfile({name}){
    const [data, setData] = useState("Loading..");
    if(name){
        setData(name)
    }else{
        setData("data Notfounnd")
    }
    return(
        <>

        </>
    )
}