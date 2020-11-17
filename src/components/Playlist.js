import React, { Link } from 'react';

const Playlist = (props) => {
	const loaded = () => {
		const JSX = props.songs.map((song) => {
			const favSongJSX = song.fav ? <span color='red'>Fav</span> : <></>;
			return (
				<div className="playlistContainer">
					<div className="songContainer">
						{song.name} , {song.artist}, {song.length}
					</div>
					<div className="buttonContainer">
						<button
							onClick={() => {
								props.deleteSong(song);
							}}>
							Remove
						</button>
						{favSongJSX}
						<button
							onClick={() => {
                                props.onFavoriteToggle(song)
							}}>
							Favorite
						</button>
					</div>
				</div>
			);
		});

		return <div>{JSX}</div>;
	};

	return props.songs && props.songs.length > 0 ? loaded() : <h1>Loading...</h1>;
};
export default Playlist;