import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import Playlist from "./components/Playlist/Playlist";
import SearchResults from "./components/SearchResults/SearchResults";
import React, { useState, useEffect, useCallback } from "react";
import Spotify from "./util/spotify";

function App() {
  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const mockTracks = [
    {
      id: "1",
      name: "Song A",
      artist: "Artist 1",
      album: "Album X",
      uri: "spotify:track:08o75xMKmGrKny6GsXrNJW",
    },
    {
      id: "2",
      name: "Song B",
      artist: "Artist 2",
      album: "Album Y",
      uri: "spotify:track:3rnAobCeh4uD1NfNpbNc2e",
    },
    {
      id: "3",
      name: "Song C",
      artist: "Artist 3",
      album: "Album Z",
      uri: "spotify:track:3RSpK5Y0y5tl25qvssrwJ6",
    },
  ];

  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults, setSearchResults] = useState(mockTracks);

  const handleAddTrack = (track) => {
    if (
      playlistTracks.find(
        (savedTrack) =>
          savedTrack.name === track.name || savedTrack.id === track.id
      )
    )
      return;
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  };

  const handleRemoveTrack = (track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((savedTrack) => savedTrack.name != track.name)
    );
  };

  const handleSave = () => {
    if (playlistTracks.length === 0) {
      return;
    }
    const uris = [...new Set(playlistTracks.map((t) => t.uri)).filter(Boolean)];
    //reseting after the current playlist's been saved
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  };

  const handleSearch = async (term) => {
    const results = await Spotify.search(term);
    setSearchResults(results);
  };

  return (
    <div>
      <SearchBar onSearch={search}></SearchBar>
      <div className="App-playlists">
        <SearchResults
          tracks={searchResults}
          onAddTrack={handleAddTrack}
        ></SearchResults>
        <Playlist
          name={playlistName}
          tracks={playlistTracks}
          onNameChange={setPlaylistName}
          onRemoveTrack={handleRemoveTrack}
          onSave={handleSave}
        ></Playlist>
      </div>
    </div>
  );
}

export default App;
