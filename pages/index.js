import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

import Sidebar from "../src/components/Sidebar";
import NewCarousel from "../src/components/NewCarousel";

export default function Home({ results }) {
	const [allProducts, setAllProducts] = useState([]);
	const [filteredByNameProducts, setFilteredByNameProducts] = useState([]);
	const [filteredByStateProducts, setFilteredByStateProducts] = useState([]);
	const [filteredByCityProducts, setFilteredByCityProducts] = useState([]);
	const [selectedName, setSelectedName] = useState("");
	const [selectedCity, setSelectedCity] = useState("");
	const [selectedState, setSelectedState] = useState("");

	async function getStaticProps() {
		const res = await axios.get(`https://assessment-edvora.herokuapp.com/`);
		setAllProducts(res.data);
		console.log(res.data);

		if (!results) {
			return {
				notFound: true,
			};
		}

		return {
			props: { results }, // will be passed to the page component as props
		};
	}
	const createFilteredByNameProductsArray = (name) => {
		const filtered = allProducts.filter(
			(product) => product.product_name == name
		);
		setFilteredByNameProducts(filtered);
	};

	const createFilteredByStateProductsArray = (state) => {
		const filtered = allProducts.filter(
			(product) => product.address.state == state
		);
		setFilteredByStateProducts(filtered);
	};

	const createFilteredByCityProductsArray = (city) => {
		const filtered = allProducts.filter(
			(product) => product.address.city == city
		);
		setFilteredByCityProducts(filtered);
	};

	useEffect(() => {
		getStaticProps();
	}, []);

	useEffect(() => {
		createFilteredByNameProductsArray(selectedName);
	}, [selectedName]);

	useEffect(() => {
		createFilteredByStateProductsArray(selectedState);
	}, [selectedState]);

	useEffect(() => {
		createFilteredByCityProductsArray(selectedCity);
	}, [selectedCity]);

	const productNames = allProducts.map((item) => item.product_name);
	const productsArr = Array.from(new Set(productNames));

	const stateNames = allProducts.map((item) => item.address.state);
	const statesArr = Array.from(new Set(stateNames));

	const cityNames = allProducts.map((item) => item.address.city);
	const citiesArr = Array.from(new Set(cityNames));
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
				<NewCarousel
					filteredProducts={filteredByNameProducts}
					filteredBy="Products by:"
				/>
				<NewCarousel
					filteredProducts={filteredByStateProducts}
					filteredBy="State"
				/>
				<NewCarousel
					filteredProducts={filteredByCityProducts}
					filteredBy="City"
				/>
			</main>
		</div>
	);
}
