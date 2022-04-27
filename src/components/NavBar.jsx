import { Nav, Navbar, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
	return (
		<Navbar
			style={{ backgroundColor: "#ffffff00" }}
			variant="light"
			className="justify-content-between text-center"
		>
			<div className="ml-5">
				<Nav className="mr-auto">
					<Nav.Link as={Link} to="/Product">
						Products
					</Nav.Link>
					<Nav.Link as={Link} to="/Resources">
						Resources
					</Nav.Link>
					<Nav.Link as={Link} to="/Support">
						Support
					</Nav.Link>
				</Nav>
			</div>

			<div>
				<Navbar.Brand href="#home">
					<img
						src="https://ubisoft-avatars.akamaized.net/64983032-4ab0-4c32-b68e-3a27e978909f/default_256_256.png"
						alt="Logo"
						style={{ maxWidth: "60px", objectFit: "cover" }}
					/>
				</Navbar.Brand>
			</div>

			<div className="mr-5">
				<Button
					as="input"
					type="button"
					variant="light"
					className="rounded-start mr-2"
					value="Company"
				/>{" "}
				<Button
					as="input"
					type="submit"
					variant="light"
					className="rounded-start mr-2"
					value="Pricing"
				/>{" "}
				<Button
					as="input"
					type="reset"
					variant="warning"
					className="rounded-start"
					value="Contact Us"
				/>
			</div>
		</Navbar>
	);
}

export default NavBar;
