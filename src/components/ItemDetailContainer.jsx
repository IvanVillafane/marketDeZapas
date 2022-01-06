import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import products from "../data/products"

const ItemDetailContainer = () => {

  const [items, setItems] = useState({});

  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
      setLoading(true);

  const getItem = new Promise((resolve) => {
    
    setTimeout(() => {
          const filter = products.find((product) => product.id === id);
    
      resolve(filter);
    }, 2000);
  });
  

  getItem
  
  .then((resolve) => {
    setItems(resolve);
})
.finally(() => setLoading(false));
  },[id]);


  return loading ?
  <h3>Porfavor Espere</h3>
  :
  
    <div>
      <ItemDetail key={items.id} {...items}/>
    </div>
 
};

export default ItemDetailContainer;
