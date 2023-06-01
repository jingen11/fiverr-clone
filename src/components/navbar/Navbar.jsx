import React, {
	useState, useEffect 
} from "react";
import {
	Link,
	useLocation
} from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
	const [active, setActive] = useState(false);
	const [open, setOpen] = useState(false);

	const {
		pathname, 
	} = useLocation();

	const isActive = () => {
		window.scrollY > 0 ? setActive(true) : setActive(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", isActive);
	
		return () => {
			window.removeEventListener("scroll", isActive);
		};
	}, []);
	
	const currentUser = {
		id: 1,
		username: "Jon Doe",
		isSeller: true,	
	};
	
	return (
		<div className={ active || pathname !== "/" ? "navbar active" : "navbar" }>
			<div className="container">	
				<Link to='/' className="link">
					<div className="logo">
						<span className="text">
							fiverr
						</span>
						<span className="dot">
							.
						</span>
					</div>
				</Link>
				<div className="links">
					<span>
						Fiverr Business
					</span>
					<span>
						Explore
					</span>
					<span>
						English
					</span>
					{!currentUser?.isSeller && <span>Become a Seller</span>}
					{!currentUser && <span>Sign in</span>}
					{!currentUser && <button>Join</button>}
					{
						currentUser && 
						(
							<div className="user" onClick={ () => setOpen(!open) }>
								<img src="./image/react.svg" alt="" />
								<span>
									{currentUser?.username}
								</span>
								{
									open &&
								(
									<div className="option">
										{
											currentUser?.isSeller && (<>
												<Link className="link" to="/mygigs">Gigs</Link>
												<Link className="link" to="/add">Add New Gig</Link>
											</>)
										}
										<Link className="link" to="/orders">Orders</Link>
										<Link className="link" to="/messages">Messages</Link>
										<Link className="link" to="/">Logout</Link>
									</div>
								)
								}
							</div>
						)
					}
				</div>
			</div>
			{
				active || pathname !== "/" && <>
					<hr />
					<div className="menu">
						<Link className="link" to="/">
							Graphics & Design
						</Link>
						<Link className="link" to="/">
							Video & Animation
						</Link>
						<Link className="link" to="/">
							Writing & Transition
						</Link>
						<Link className="link" to="/">
							AI Services
						</Link>
						<Link className="link" to="/">
							Digital Marketing
						</Link>
						<Link className="link" to="/">
							Music & Audio
						</Link>
						<Link className="link" to="/">
							Programming & Tech
						</Link>
						<Link className="link" to="/">
							Business
						</Link>
						<Link className="link" to="/">
							Lifestyle
						</Link>
					</div>
				</>
			}
		</div>
	);
};

export default Navbar;