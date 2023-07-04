"use client";
import React from "react";
import { useAppSelector } from "../store/hooks";

const ProductList = () => {
  const products = useAppSelector((state) => state.productArray);

  return (
    <div>
      <h1>Product list</h1>
      <div className="grid grid-cols-3">
        {products.map((item, i) => {
          return (
            <div
              className="w-[350px] bg-slate-300 border rounded-xl p-8 mx-auto mt-5"
              key={i}
            >
              <h1>Company: {item.Company}</h1>
              <p>Shoes: {item.Shoes}</p>
              <p>Quantity: {item.Quantity}</p>
              <button className="p-3 bg-black text-white mt-8 ">cart me</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
