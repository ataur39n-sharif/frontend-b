import { createSlice } from "@reduxjs/toolkit";
//"cpu" | "storage" | "ram" | "monitor" | "keyboard" | "mouse" | "power_supply" | "motherboard"
export type TProduct = {
    _id: string;
    title: string;
    description: string;
    price: number;
    rating: number;
    stock: number;
    brand: string;
    thumbnail: string;
    discountPercentage: number;
    category: string;
}

type TInitialState = {
    list: TProduct[];
}

const initialState: TInitialState = {
    list: [],
}

export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {}
})


export default ProductsSlice.reducer