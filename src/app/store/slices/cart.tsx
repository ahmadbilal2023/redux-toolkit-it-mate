import { createSlice } from "@reduxjs/toolkit";

interface Cartstate {
  name: string;
  age: number;
  ishave: boolean;
}

const initialState: Cartstate[] = [
  { name: "imran", age: 24, ishave: true },
  { name: "mubeen", age: 24, ishave: true },
  { name: "hafiz", age: 24, ishave: true },
];
const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addCart(state, action) {},
    deleteCart(state, action) {},
  },
});

export const { addCart, deleteCart } = CartSlice.actions;

export default CartSlice.reducer;
