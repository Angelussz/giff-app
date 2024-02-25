import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch man", "Superman"]);
  const onAddCategory = (category) => {
    if (categories.includes(category)) return;
    setCategories([...categories, category]);
  };
  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      <button onClick={onAddCategory}>Agregar Categoria</button>

      {categories.map((el, index) => (
        <GiftGrid category={el} key={el} />
      ))}
    </>
  );
};
