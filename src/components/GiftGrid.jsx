import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GiftItem } from "./GiftItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GiftGrid = ({ category }) => {
  const {images, isLoading} = useFetchGifs(category);
  // const [images, setImages] = useState([]);
  // const [setisLoading, setSetisLoading] = useState(true);
  // const getImages =async()=>{
  //   const newImages = await getGifs(category);
  //   setImages(newImages);
  //   setisLoading(false);
  // }
  // useEffect(() => {
  //   getImages()
  // }, []);

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && (<h2>Cargando ...</h2>)
      }
      <div className="card-grid">
        {images.map((img)=> <GiftItem key={img.id} {...img}  />)}
      </div>
    </>
  );
};
