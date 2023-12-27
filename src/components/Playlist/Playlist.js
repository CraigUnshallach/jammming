import React from 'react';
import Tracklist from '../Tracklist/Tracklist';

function Playlist({playlistName, playlistTracks, onNameChange, onRemove}){

    const mockPlaylistString = 'Track1\nTrack 2\nTrack 3'

    const handleNamechange = (e) => {
        onNameChange(e.target.value);

    }

    return(
        <div className="Playlist">
            <input value={playlistName} onChange={handleNamechange} />
            <h2>{playlistName}</h2>
            <Tracklist tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
            <button>SAVE TO SPOTIFY</button>
            <div>
                <strong>Mock Playlist String:</strong>
                <pre>{mockPlaylistString}</pre>
            </div>
        </div>
    );
}

export default Playlist;