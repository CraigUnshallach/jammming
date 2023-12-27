import React from 'react';
import Track from '../Track/Track';

function Tracklist({ tracks, onRemove, isRemoval }){

    return(
        <div className="Tracklist">
            {tracks.map((track)=> (
                <Track key={track.id} track={track} onRemove={onRemove} isRemoval={isRemoval}/>
            ))}
        
        </div>
    );
}

export default Tracklist;