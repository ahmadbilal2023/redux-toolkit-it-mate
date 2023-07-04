import { createSlice } from "@reduxjs/toolkit";

interface Productstate {
  Shoes: string;
  Company: string;
  Quantity: number;
}

const initialState: Productstate[] = [
  { Shoes: "Black", Company: "bata", Quantity: 2 },
  { Shoes: "Brown", Company: "Starlet", Quantity: 3 },
  { Shoes: "Pink", Company: "Service", Quantity: 5 },
];

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action) {},
    deleteProduct(state, action) {},
  },
});

export const { addProduct, deleteProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
