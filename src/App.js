import "./App.css";
import React, { useEffect } from "react";
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./Companents/HEADER/Header";
import Home from "./Pages/Home /Home";
import Footer from "./Companents/FOOTER/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import UseApi from "./Hooks/UseApi";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "./Redux/categorySlice";
import Categories from "./Pages/Categories/Categories";
import { setAppData } from "./Redux/appDataSlice";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
	const api = UseApi();
	const dispatch = useDispatch();
	const authState = useSelector((state) => state.auth);
	const appDataState = useSelector((state) => state.appData);

	useEffect(() => {
		api
			.get("public/categories/listMainCategories")
			.then((response) => {
				dispatch(setCategory(response.data.data));
			})
			.catch((err) => console.log(err));
	}, []);

	if (authState.token && !appDataState) {
		api
			.get("user/appData")
			.then((res) => {
				console.log("res ", res);
				dispatch(setAppData(res.data.data.user));
			})
			.catch((err) => console.log(err));
	}

	return (
		<React.Fragment>
			<Header />
			<HashRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="category/:slug" element={<Categories />} />
					<Route path="categories" element={<Categories />} />
					<Route path="blogs" element={<Blogs />} />
				</Routes>
			</HashRouter>
			<Footer />
		</React.Fragment>
	);
}

export default App;
