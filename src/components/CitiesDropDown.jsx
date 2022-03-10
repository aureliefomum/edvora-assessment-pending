import React from "react";
export default function CitiesDropDown({
	citiesArr,
	setSelectedCity,
	selectedCity,
}) {
	return (
		<div className="container p-3">
			<div className="dropdown m-2">
				<label htmlFor="city"></label>
				<select
					defaultValue="City"
					name="city"
					onChange={(e) => setSelectedCity(e.target.value)}
					value={selectedCity}
				>
					<option value="">City</option>
					{citiesArr.map((city, cityIdx) => {
						return (
							<option key={cityIdx} value={city}>
								{city}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
}
