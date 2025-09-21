import React from "react";
import Tracklist from "../Tracklist/Tracklist";

const Playlist = ({ name, tracks, onNameChange, onRemoveTrack, onSave }) => {
  return (
    <div>
      <input
        value={name ?? ""}
        onChange={(e) => onNameChange(e.target.value)}
      />
      <Tracklist tracks={tracks} onRemove={onRemoveTrack} />
      <button type="button " disabled={!tracks?.length} onClick={onSave}>
        Save to Spotify
      </button>
    </div>
  );
};

export default Playlist;
