import React, {useState, useEffect} from 'react'
import './App.css';
import './components/component.css';
import Header from './components/Header'
import Playlist from './components/Playlist';
import Form from './components/Form';
import Fave from './components/Fave'


import { Route, Link, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  const url = "https://tunr-backend-ruby.herokuapp.com/songs"

	const emptySong = {
		name: '',
		artist: '',
		length: '',
  };
  
	const [songData, setSongData] = React.useState(emptySong);
	const [selectedSong, setSelectedSong] = React.useState(emptySong);
  const [favorites, setFavorites] = React.useState([])

	const getSongs = () => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setSongData(data);
			});
	};

	React.useEffect(() => {
		getSongs();
	}, []);

	const handleCreate = (newSong) => {
		fetch(url, {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newSong),
		}).then((response) => getSongs());
  };
  
	const selectSong = (song) => {
		setSelectedSong(song);
	};

	const deleteSong = (song) => {
		fetch((url + song.id), {
			method: 'delete',
		}).then((response) => getSongs());
  };
  
  const handleToggleFavorite = (song) => {
    const favoriteSongs = [...favorites]
    const songIndex = favoriteSongs.indexOf(song)

    songIndex > -1 ? favoriteSongs.splice(songIndex, 1) : favoriteSongs.push(song)
    setFavorites(favoriteSongs)
  }

	return (
		<Router>
			<div className='App'>
				<Header />
					<h2>PLAYLIST 1</h2>
						<h3>ADD A NEW SONG</h3>
							<main>
								<Switch>
									<Route
										exact
										path='/'
										render={(rp) => (
											<div>
												<Playlist
													songs={songData}
													deleteSong={deleteSong}
													selectSong={selectSong}
													onFavoriteToggle={handleToggleFavorite}
												/>
												<Fave favorites={favorites}/>
												<Form
													{...rp}
													label='Add New Song'
													song={emptySong}
													handleSubmit={handleCreate}
												/>
											</div>
										)}
									/>
								</Switch>
							</main>
			</div>
		</Router>
	);
}

export default App;