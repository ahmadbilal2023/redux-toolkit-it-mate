import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from "../store/slices/product"
import CartSlice from "../store/slices/cart"


export const store = configureStore({
    reducer:{
        productArray : ProductSlice,
        cartArray : CartSlice
    }
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch