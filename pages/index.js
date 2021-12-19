import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

import Sidebar from "../src/components/Sidebar";
import ProductCard from "../src/components/ProductCard";
import Carousel from "../src/components/Carousel";

// function itemsFilter(filterVal){
//   if (filterVal ===  )
//   allProducts.filter((item) => item.product_name === selectedName)
// }

export default function Home({ data }) {
	console.log(data);

	const [allProducts, setAllProducts] = useState([]);
	const [selectedName, setSelectedName] = useState([]);
	const [selectedCity, setSelectedCity] = useState([]);
	const [selectedState, setSelectedState] = useState([]);

	useEffect(() => {
		setAllProducts(data);
	}, [data]);

	useEffect(() => {
		console.log("selected", selectedName);
	}, [selectedName]);

	const productNames = data.map((item) => item.product_name);
	const productsArr = [];
	productNames.forEach((item) => {
		if (productsArr.filter((productEl) => productEl === item).length === 0) {
			productsArr.push(item);
		}
	});
	console.log(productNames, productsArr);

	const stateNames = data.map((item) => item.address.state);
	const statesArr = [];
	stateNames.forEach((item) => {
		if (statesArr.filter((stateEl) => stateEl === item).length === 0) {
			statesArr.push(item);
		}
	});

	const cityNames = data.map((item) => item.address.city);
	const citiesArr = [];
	cityNames.forEach((item) => {
		if (citiesArr.filter((cityEl) => cityEl === item).length === 0) {
			citiesArr.push(item);
		}
	});

	return (
		<div className={styles.container}>
			<Sidebar
				productsArr={productsArr}
				statesArr={statesArr}
				citiesArr={citiesArr}
				selectedName={selectedName}
				setSelectedName={setSelectedName}
				selectedCity={selectedCity}
				setSelectedCity={setSelectedCity}
				selectedState={selectedState}
				setSelectedState={setSelectedState}
			/>

			<main className={styles.main}>
				<div>
					<h2 className={styles.h2}>Edvora</h2>
					<h3 className={styles.h3}>Products</h3>
				</div>

				{/* <div>
					{allProducts
						// .filter((item) => item.product_name === selectedName)
						// .filter((item) => item.address.city === selectedCity)
						// .filter((item) => item.address.state === selectedState)
						.map((item) => (
							<div>
								<p>{item.product_name}</p>
							</div>
						))}
				</div> */}
				<Carousel data={data} />
				<Carousel data={data} />
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const res = await axios.get(`https://assessment-edvora.herokuapp.com/`);
	const data = await res.data;

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: { data }, // will be passed to the page component as props
	};
}
