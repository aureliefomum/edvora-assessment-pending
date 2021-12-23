import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../../styles/Home.module.css";
import ProductCard from "./ProductCard";

export default function NewCarousel({ filteredProducts, filteredBy }) {
	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};
	return (
		<div>
			{filteredProducts.length > 0 && (
				<h4
					className={styles.h4}
				>{`Products by: ${filteredProducts[0].product_name}`}</h4>
			)}
			{filteredProducts.length && (
				<h4 className={styles.h4}>{filteredProducts[0].address.state}</h4>
			)}
			{filteredBy === "city" && filteredProducts.length && (
				<h4 className={styles.h4}>{filteredProducts[0].address.city}</h4>
			)}
			<div className={styles.carouselDiv}>
				<Carousel
					swipeable={false}
					draggable={false}
					showDots={true}
					responsive={responsive}
					ssr={true}
					infinite={true}
					autoPlay={false}
					autoPlaySpeed={1000}
					keyBoardControl={true}
					customTransition="all .5"
					transitionDuration={500}
					containerClass="carousel-container"
					removeArrowOnDeviceType={["tablet", "mobile"]}
					dotListClass="custom-dot-list-style"
					itemClass="carousel-item-padding-40-px"
				>
					{filteredProducts.map((product, productIdx) => (
						<ProductCard product={product} key={productIdx} />
					))}
				</Carousel>
			</div>
		</div>
	);
}
