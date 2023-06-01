import React from "react";
import Navbar from "./components/navbar/Navbar";
import Add from "./pages/add/Add";
import Home from "./pages/home/Home";
import Gig from "./pages/gig/Gig";
import Gigs from "./pages/gigs/Gigs";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import MyGigs from "./pages/myGigs/MyGigs";
import Orders from "./pages/orders/Orders";
import Footer from "./pages/footer/footer";
import {
	createBrowserRouter,
	RouterProvider,
	Outlet
} from "react-router-dom";

import "./App.scss";

const Layout = () => {
	return(<>
		<Navbar />
		<Outlet />
		<Footer />
	</>);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/add",
				element: <Add />,
			},
			{
				path: "/gig/:id",
				element: <Gig />,
			},
			{
				path: "/gigs",
				element: <Gigs />,
			},
			{
				path: "/message/:id",
				element: <Message />,
			},
			{
				path: "/messages",
				element: <Messages />,
			},
			{
				path: "/mygigs",
				element: <MyGigs />,
			},
			{
				path: "/orders",
				element: <Orders />,
			}
		],
	}
]);

function App() {
	return (
		<RouterProvider router={ router } />
	);
}

export default App;
