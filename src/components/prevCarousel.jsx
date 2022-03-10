import styles from "../../styles/Home.module.css";

import ProductCard from "./ProductCard";

function prevCarousel({ results, productsArr, selectedName }) {
	return (
		<div>
			<h4 className={styles.h4}>
				{productsArr
					.filter((item) => item === selectedName)
					.map((item, idx) => (
						<div>
							<p key={idx}>{item}</p>
						</div>
					))}
			</h4>
			<div className={styles.carouselDiv}>
				<ProductCard results={results} />
			</div>
		</div>
	);
}

export default prevCarousel;
