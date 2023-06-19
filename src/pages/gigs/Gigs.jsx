import React, {
	useState 
} from "react";
import "./Gigs.scss";
import {
	gigs 
} from "../../data";
import GigCard from "../../components/gigCard/GigCard";

function Gigs() {
	const [open, setOpen] = useState(false);
	const [sort, setSort] = useState("sales");

	const resort = (type) => {
		setSort(type);
		setOpen(false);
	};

	return (
		<div className="gigs">
			<div className="container">
				<span className="beadcrumbs">FIVERR &gt; GRAPHICS</span>
				<h1>AI Artist</h1>
				<p>Explore the boundaries of art and technology</p>
				<div className="menu">
					<div className="left">
						<span>Budget</span>
						<input type="text" placeholder="min" />
						<input type="text" placeholder="max" />
						<button>Apply</button>
					</div>
					<div className="right">
						<span className="sortBy">SortBy</span>
						<div className="sortType">
							{sort === "sales" ? "Best Selling" : "Newest"}
						</div>
						<img src="/image/down.png" alt="" onClick={ () => setOpen(!open) } />
						{
							open && <div className="rightMenu">
								{
									sort === "sales" ?	<span onClick={ () => resort("createdAt") }>Newest</span>
										: <span onClick={ () => resort("sales") }>Best Selling</span>
								}
							</div>
						}
					</div>
				</div>

				<div className="cards">
					{gigs.map((gig) => (<GigCard key={ gig.id } item={ gig } />))}
				</div>
			</div>
		</div>
	);
}

export default Gigs;