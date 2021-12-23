import { useState } from "react";
import styles from "../../styles/Home.module.css";
// import Dropdown from "react-dropdown";
// import "react-dropdown/style.css";
import { useEffect } from "react/cjs/react.development";
import ProductDropDown from "./ProductDropDown";
import StateDropDown from "./StateDropDown";
import CitiesDropDown from "./CitiesDropDown";

function Sidebar({
	productsArr,
	statesArr,
	citiesArr,
	selectedName,
	setSelectedName,
	selectedCity,
	setSelectedCity,
	selectedState,
	setSelectedState,
}) {
	return (
		<aside className={styles.aside}>
			<div className={styles.asideDiv}>
				<div className={styles.filters}>Filters</div>

				<div className={styles.dropdowns}>
					<ProductDropDown
						productsArr={productsArr}
						setSelectedName={setSelectedName}
						selectedName={selectedName}
					/>
					<StateDropDown
						statesArr={statesArr}
						setSelectedState={setSelectedState}
						selectedState={selectedState}
					/>
					<CitiesDropDown
						citiesArr={citiesArr}
						setSelectedCity={setSelectedCity}
						selectedCity={selectedCity}
					/>
				</div>
			</div>
		</aside>
	);
}

export default Sidebar;
