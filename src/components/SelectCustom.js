import React from "react";

export default function SelectCustom(props) {
  
	return (
		<div>
			<label><span>props.label</span></label>
			<div>
				<select onChange={handleOnChange}>
					{props.optionsArray.map((option, index) => (
						<option key={index} value={option}>
							{option}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}
