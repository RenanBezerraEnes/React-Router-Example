import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Resources from "./components/Resources";
import Product from "./components/Product";
import Support from "./components/Support";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/Product" element={<Product />} />
				<Route path="/Resources" exact element={<Resources />} />
				<Route path="/Support" element={<Support />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
