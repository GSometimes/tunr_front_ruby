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
				className='inputField'
				type='text'
				name='name'
				placeholder="Song Name"
				value={formData.name}
    			onChange={handleChange}
                /><br/>
			<input
				className='inputField'
				type='text'
				name='artist'
				placeholder="Artist"
				value={formData.artist}
				onChange={handleChange}
                /><br/>
			<input
				className='inputField'
				type='text'
				name='length'
				placeholder="Song Length"
				value={formData.length}
				onChange={handleChange}
                /><br/>
			<input className='submitButton' type='submit' value={props.label} />
		</form>
    </div>
	);
};

export default Form;