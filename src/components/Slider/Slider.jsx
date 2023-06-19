import React from "react";
import {
	Navigation, Autoplay 
} from "swiper";
import {
	Swiper, SwiperSlide
} from "swiper/react";
import "swiper/css";
import "./Slider.scss";

function Slider({
	children, 
	slidesPerView,
}) {
	let checkedChildren = [...children];

	if(children.length < slidesPerView * 2){
		checkedChildren = [...checkedChildren, ...children];
	}

	return (
		<div className="slider">
			<div className="container">
				<div className="swiper-button image-swiper-button-next">
					<img src="./image/next.svg" />
				</div>
				<div className="swiper-button image-swiper-button-prev">
					<img src="./image/prev.svg" />
				</div>
				<Swiper 
					slidesPerView={ slidesPerView }
					loop={ true }
					modules={ [Navigation, Autoplay] }
					navigation={
						{
							nextEl: ".image-swiper-button-next",
							prevEl: ".image-swiper-button-prev",
						} 
					}
					autoplay={
						{
							delay: 4000, 
						} 
					}
					onSlideChange={ () => console.log("slide change") }
					onSwiper={ (swiper) => console.log(swiper) }>
					{
						checkedChildren.map((child, index) => (<SwiperSlide key={ index }>
							{child}
						</SwiperSlide>))
					}
				</Swiper>
			</div>
		</div>

	);
}

export default Slider;