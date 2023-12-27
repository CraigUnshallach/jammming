import React from 'react';


function Track({track}){

    return(
        <div className="Track">
            <div className="Track-Information">
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
                // TODO Add Button 

            </div>
        </div>
    );


}

export default Track;