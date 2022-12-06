import { configureStore } from "@reduxjs/toolkit";
import appDataReducer from "./appDataSlice";
import authReducer from "./authSlice";
import categoryReducer from "./categorySlice";

export default configureStore({
	reducer: {
		auth: authReducer,
		category: categoryReducer,
		appData: appDataReducer,
	},
});
