import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const categorySlice = createSlice({
	name: "categorySlice",
	initialState,
	reducers: {
		setCategory: (state, action) => {
			console.log("SETCATEGORY ACTION", state, action);
			return action.payload;
		},
	},
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
