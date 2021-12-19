import { useState } from "react";
import styles from "../../styles/Home.module.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useEffect } from "react/cjs/react.development";

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
					{productsArr && (
						<Dropdown
							options={productsArr}
							onChange={(ev) => {
								setSelectedName(ev.value);
							}}
							value={productsArr[0]}
						/>
					)}
					{statesArr && (
						<Dropdown
							options={statesArr}
							onChange={(ev) => {
								setSelectedState(ev.value);
							}}
							value={statesArr[0]}
						/>
					)}
					{citiesArr && (
						<Dropdown
							options={citiesArr}
							onChange={(ev) => {
								setSelectedCity(ev.value);
							}}
							value={citiesArr[0]}
						/>
					)}
				</div>
			</div>
		</aside>
	);
}

export default Sidebar;
