import React from 'react';

export default ({ input, label, dropdown, meta: { error, touched } }) => {
	//...input same as onblur={input.onBlur} onChange={input.onChange} etc.
	//abusing javascript right here with touched && error if touched is true it will display error if it's false it will exit out of the statement

	console.log(dropdown, input);
	return (
		<div>
			<label>{label}</label>
			<select {...input} style={{ marginBottom: '5px' }}>
				<option />
				{dropdown.map(option => {
					return <option value={option.value}>{option.option}</option>;
				})}
			</select>
			<div className="red-text" style={{ marginBottom: '20px' }}>
				{touched && error}
			</div>
		</div>
	);
};
