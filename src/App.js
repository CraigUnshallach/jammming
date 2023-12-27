import logo from './logo.svg';
import React, { useState } from "react";
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import './App.css';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([])

  const hardcodedTracks = [
    { id: '1', name: 'Track1', artist: 'Artist1', album: 'album1'},
    { id: '2', name: 'Track2', artist: 'Artist2', album: 'album2'},
    { id: '2', name: 'Track2', artist: 'Artist2', album: 'album2'},
  ];

  const handleSearch = (searchTerm) => {
    setSearchResults(hardcodedTracks);
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  const addTrackToPlaylist = (track) => {
    if(!playlistTracks.find((playlistTrack) => playlistTrack.id === track.id)){
      setPlaylistTracks([...playlistTracks, track])
    }
  }

  const removeTrackFromPlaylist = (track) => {
    const updatedPlaylist = playlistTracks.filter((playlistTracks) => playlistTracks.id !== track.id);
    setPlaylistTracks(updatedPlaylist);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SearchBar onSearch={handleSearch} />
      <div className= 'App-playlist'>
        <SearchResults searchResults={searchResults} />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onNameChange={updatePlaylistName}
          onRemove={removeTrackFromPlaylist}
        />
      </div>
    </div>
  );
}

export default App;
