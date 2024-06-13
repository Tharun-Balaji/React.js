import HomePage from "./routes/homepage/HomePage";
import ListPage from "./routes/listpage/ListPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./routes/layout/Layout.jsx";
import SinglePage from './routes/singlePage/SinglePage';

function App() {

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <HomePage />
				},
				{
					path: "/list",
					element: <ListPage />
				},
				{
					path: "/:id",
					element: <SinglePage/>
				}
			]
		}
	]);

	return (
		<RouterProvider router={router} />
	);
}

export default App;
