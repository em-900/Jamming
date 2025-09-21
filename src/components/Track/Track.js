import React from "react";

const Track = ({ track, onAdd, onRemove }) => {
  return (
    <div className="track">
      <div className="track-info">
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      <div className="track-actions">
        {onAdd && (
          <button aria-label="Add track" onClick={() => onAdd(track)}>
            {" "}
            +{" "}
          </button>
        )}
        {onRemove && (
          <button aria-label="Remove track" onClick={() => onRemove(track)}>
            {" "}
            -{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default Track;
