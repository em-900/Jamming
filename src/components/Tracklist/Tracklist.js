import React from "react";
import Track from "../Track/Track";

//empty array so that if no track is passed in it wont crash
const Tracklist = ({ tracks = [], onAdd, onRemove }) => {
  return (
    <div>
      {tracks.map((track, i) => (
        <Track
          key={track.id ?? i}
          track={track}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default Tracklist;
