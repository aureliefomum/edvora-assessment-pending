import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function prevDropDown() {
	return (
		<div>
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
	);
}
