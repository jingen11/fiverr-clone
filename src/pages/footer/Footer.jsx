import React from "react";
import "./footer.scss";

function Footer() {
	return (
		<div className="footer">
			<div className="container">
				<div className="top">
					<div className="item">
						<h2>Categories</h2>
						<span>Graphics & Desgin</span>
						<span>Digital Marketing</span>
						<span>Writing & Translation</span>
						<span>Video & Animation</span>
						<span>Music & Audio</span>
						<span>Programming & Tech</span>
						<span>Data</span>
						<span>Business</span>
						<span>Photography</span>
						<span>End-to-End Projects</span>
						<span>Sitemap</span>
					</div>	
					<div className="item">
						<h2>About</h2>
						<span>Careers</span>
						<span>Pres & News</span>
						<span>Partnership</span>
						<span>Privacy Policy</span>
						<span>Terms of Service</span>
						<span>Intellectual Property Claims</span>
						<span>Investor Relations</span>
					</div>
					<div className="item">
						<h2>Support</h2>
						<span>Help & Support</span>
						<span>Trust & Safety</span>
						<span>Selling on Fiverr</span>
						<span>Buying on Fiverr</span>
						<span>Fiverr Guides</span>
					</div>
				</div>
				<hr />
				<div className="bottom">
					<div className="left">
						<h2>fiverr</h2>
						<span>© Fiverr International Ltd. 2023</span>
					</div>
					<div className="right">
						<div className="social">
							<img src="image/twitter.png" alt="" />
							<img src="image/facebook.png" alt="" />
							<img src="image/linkedin.png" alt="" />
							<img src="image/pinterest.png" alt="" />
							<img src="image/instagram.png" alt="" />
						</div>
						<div className="link">
							<img src="image/language.png" alt="" />
							<span>English</span>
							
						</div>
						<div className="link">
							<img src="image/coin.png" alt="" />
							<span>USD</span>
						</div>	
						<img src="image/accessibility.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;