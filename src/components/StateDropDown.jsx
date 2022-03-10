import React from "react";
export default function StateDropDown({
	statesArr,
	setSelectedState,
	selectedState,
}) {
	return (
		<div className="container p-3">
			<div className="dropdown m-2">
				<label htmlFor="state"></label>
				<select
					defaultValue="State"
					name="state"
					onChange={(e) => setSelectedState(e.target.value)}
					value={selectedState}
				>
					<option value="">State</option>
					{statesArr.map((state, stateIdx) => {
						return (
							<option key={stateIdx} value={state}>
								{state}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
}
