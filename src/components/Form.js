import React from 'react';

const Form = (props) => {
	const emptySong = {
		name: '',
		artist: '',
		length: '',
	};
	const [formData, setFormData] = React.useState(props.song);

	const handleSubmit = (event) => {
		event.preventDefault();
		props.handleSubmit(formData);
		setFormData(emptySong);
		props.history.push('/');
	};

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	return (
        <div>
		<form class='songForm' onSubmit={handleSubmit}>
            <input
				id='name'
				type='text'
				name='name'
				value={formData.name}
    			onChange={handleChange}
                /><br/>
			<input
				id='artist'
				type='text'
				name='artist'
				value={formData.artist}
				onChange={handleChange}
                /><br/>
			<input
				id='length'
				type='text'
				name='length'
				value={formData.length}
				onChange={handleChange}
                /><br/>
			<input type='submit' value={props.label} />
		</form>
    </div>
	);
};

export default Form;