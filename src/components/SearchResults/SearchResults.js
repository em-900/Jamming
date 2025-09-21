import React from "react";
import Tracklist from "../Tracklist/Tracklist";

const SearchResults = ({ tracks, onAddTrack }) => {
  return (
    <div>
      <h2>Results</h2>
      <Tracklist tracks={tracks} onAdd={onAddTrack} />
    </div>
  );
};

export default SearchResults;
