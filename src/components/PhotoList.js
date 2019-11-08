import React, { useState, useEffect } from "react";
import axios from "axios";
import NASACard from "./NASACard";

export default function PhotoList() {

  const [photo, setPhoto] = useState([]);

  useEffect(() => {

    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(resp => {
        const photo = resp.data;
        console.log("this is it", photo);
        setPhoto(photo);
     })
      .catch(error => {
        console.log("wooooow", error);
      });
  },[]);

  return (
       <div className="photo">
           <NASACard
           title= {photo.title}
           picture={photo.url}
           date={photo.date}
           description={photo.explanation}
           />

       </div>
     )
}
