import styles from "../../styles/Home.module.css";

function ProductCard({ data }) {
	//console.log(data.data[1].address.state)
	return (
		<div className={styles.cardContainer}>
			<div className={styles.topDiv}>
				<img className={styles.img} src={data.data[1].image} />
				<div className={styles.topInfo}>
					<div className={styles.productName}>Product Name</div>
					<div className={styles.brandName}>Brand</div>
					<div className={styles.productPrice}>Price</div>
				</div>
			</div>
			<div className={styles.bottomDiv}>
				<div className={styles.bottomInfo}>
					<span className={styles.location}>Location</span>
					<span className={styles.date}>Date</span>
				</div>

				<span className={styles.description}>Description</span>
			</div>
		</div>
	);
}

export default ProductCard;
