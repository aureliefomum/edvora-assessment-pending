import styles from "../../styles/Home.module.css";

function ProductCard({ product }) {
	return (
		<div className={styles.cardContainer}>
			<div className={styles.topDiv}>
				<img className={styles.img} src={product.image} />
				<div className={styles.topInfo}>
					<div className={styles.productName}>{product.product_name}</div>
					<div className={styles.brandName}>{product.brand_name}</div>
					<div className={styles.productPrice}>{product.price}</div>
				</div>
			</div>
			<div className={styles.bottomDiv}>
				<div className={styles.bottomInfo}>
					<span
						className={styles.location}
					>{`${product.address.city}, ${product.address.state}`}</span>
					<span className={styles.date}>{product.date}</span>
				</div>

				<span className={styles.description}>{product.discription}</span>
			</div>
		</div>
	);
}

export default ProductCard;
