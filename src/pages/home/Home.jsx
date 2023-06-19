import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slider from "../../components/Slider/Slider";
import {
	cards, projects
} from "../../data";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";

function Home() {
	return (
		<div className="home">
			<Featured />
			<TrustedBy />
			<Slider slidesPerView={ 5 }>
				{cards.map((card) => (<CatCard item={ card } key={ card.id } />))}
			</Slider>
			<div className="features">
				<div className="container">
					<div className="item">
						<h1>The best part? Everything.</h1>
						<div className="title">
							<img src="./image/check.png" alt="" />
							Stick to your budget
						</div>
						<p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>	
						<div className="title">
							<img src="./image/check.png" alt="" />
							Get quality work done quickly
						</div>
						<p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>	
						<div className="title">
							<img src="./image/check.png" alt="" />
							Pay when you&apos;re happy
						</div>
						<p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>	
						<div className="title">
							<img src="./image/check.png" alt="" />
							Count on 24/7 support
						</div>
						<p>Our round-the-clock support team is available to help anytime, anywhere.</p>
					</div>
					<div className="item">
						<video src="./image/video.mov" controls />
					</div>
				</div>
			</div>
			<div className="features dark">
				<div className="container">
					<div className="item">
						<h1>fiverr business</h1>
						<h1>A solution built for business</h1>
						<p>Upgrade to a curated experience to access vetted talent and exclusive tools</p>
						<div className="title">
							<img src="./image/check.png" alt="" />
							Talent matching
						</div>	
						<div className="title">
							<img src="./image/check.png" alt="" />
							Dedicated account management
						</div>	
						<div className="title">
							<img src="./image/check.png" alt="" />
							Team collaboration tools
						</div>	
						<div className="title">
							<img src="./image/check.png" alt="" />
							Business payment solutions
						</div>
						<button>Explore Fiverr Business</button>
					</div>
					<div className="item">
						<img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" />
					</div>
				</div>
			</div>
			<Slider slidesPerView={ 4 }>
				{projects.map((card) => (<ProjectCard item={ card } key={ card.id } />))}
			</Slider>
		</div>
	);
}

export default Home;