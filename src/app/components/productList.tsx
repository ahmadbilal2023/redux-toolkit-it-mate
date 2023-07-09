"use client";
import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { addProduct } from "../store/slices/product";

const ProductList = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const products = useAppSelector((state) => state.productArray);
  const dispatch = useAppDispatch();
  console.log(name)
  return (
    <div>
      <div className="grid grid-cols-4 gap-3 bg-green-200 w-[80%] mx-auto p-2 rounded-md">
        <input
          type="text"
          placeholder="item name"
          className="p-3 bg-green-300 text-lg rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
          
        />
        <input
          type="text"
          placeholder="category"
          className="p-3 bg-green-300 text-lg rounded-md"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="quantity"
          className="p-3 bg-green-300 text-lg rounded-md"
          value={quantity}
          onChange={(e:any) => setQuantity(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(
              addProduct({ productName: name, category: category, quantity: quantity })
            )
          }
        >
          Add me
        </button>
      </div>
      <h1>Product list</h1>
      <div className="grid grid-cols-3">
        {products.map((item, i) => {
          return (
            <div
              className="w-[350px] bg-slate-300 border rounded-xl p-8 mx-auto mt-5"
              key={i}
            >
              <h1>Company: {item.productName}</h1>
              <p>Shoes: {item.category}</p>
              <p>Quantity: {item.quantity}</p>
              <button className="p-3 bg-black text-white mt-8 ">cart me</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
