import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Card.module.scss";
import axios from "axios";
import UserProfile from "./UserProfile";
import Banner from "../components/Banner";

export default function Home() {
  const [flag, setFlag] = useState(true);
  const [list, setList] = useState([]);
  const API_KEY = "5d03b1ce";
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=movie&y=2024&type=movie&page=1&apikey=${API_KEY}`)
      .then((data) => {
        let datum = data.data.Search;
        if (datum) {
          setList(datum);
        }
      })
      .catch(error => {
        console.error("Error in first API:", error);
      });
  }, []);
  const handleClick = (name) => {
    // <UserProfile data ={name} />
    alert(name)
    navigate(`/user/${name}`); // Fi: No colon (:) needed in dynamic URL
  };

  return (
    <>
    <Banner />
    <h1 className="titles">Latust Movies Are There</h1>
    <div className={styles["grid-container"]}>
      {list.map((list, index) => (
        <div
          className={styles["card-container"]}
          key={index}
          onClick={() => handleClick(movie.Title)} // Fix: Use arrow function
        >
          <img className={styles["card-image"]} src={list.Poster} alt="" />
          <div className={styles["card-overlay"]}>
            <h3 className={styles["cart-title"]}>{list.Title}</h3>
            <p>{list.Year}</p>
          </div>
        </div>
      ))}
    </div>
    </>
    
  );
}
