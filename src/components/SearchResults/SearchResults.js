import React from "react";

import "./SearchResults.css";

import TrackList from "../Tracklist/Tracklist";

const SearchResults = (props) => {
    return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList 
      tracks={props.searchResults.map((track) => ({
        ...track,
        preview_url: track.preview_url,
      }))}
      onAdd={props.onAdd} 
      
      
      />
    </div>
  );
};

export default SearchResults;