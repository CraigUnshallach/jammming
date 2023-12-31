import React, { useCallback, useState } from "react";
import "./Track.css";
import playButtonImage from './play-button.png';
import pauseButtonImage from './pause-button.png';

const Track = ({ track, onAdd, onRemove, ...restProps }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioId = `audio-preview-${track.id}`;

  const handleClick = () => {
    // Add your click event logic here
    const audioElement = document.getElementById(audioId);

    if (!isPlaying) {
      // Start playing the audio
      audioElement.play();
    } else {
      // Pause the audio
      audioElement.pause();
    }

    // Toggle the playing state
    setIsPlaying(!isPlaying);
  };

  const addTrack = useCallback(
    (event) => {
      onAdd(track);
    },
    [onAdd, track]
  );
  
  

  const removeTrack = useCallback(
    (event) => {
      onRemove(track);
    },
    [onRemove, track]
  );

  const renderAction = () => {
    if (restProps.isRemoval) {
      return (
        <button className="Track-action" onClick={removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="Track-action" onClick={addTrack}>
        +
      </button>
    );
  };

  return (
    <div className="Track">
      <div className="Track-container">
        {track.images_url && (<img src={track.images_url} alt='Cover' className="Cover" />)}
          <div className="Track-info">
            <h3> {track.name}</h3>
            <p>{track.artist} | {track.album}</p>
          
        </div>
        <div id="audio-player-container">
            {track.preview_url && (
              <>
                <button onClick={handleClick} className="Playbutton">
                  <img 
                    src={isPlaying ? pauseButtonImage : playButtonImage}
                    alt={isPlaying ? "Pause button" : "Play button"}
                    className="Playbutton-img" />                
                </button>
                <audio id={audioId} controls style={{ display: 'none' }}>
                  <source src={track.preview_url} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </>
            )}
          </div>
      </div>
        {renderAction()}
    </div>
    
  );
};

export default Track;