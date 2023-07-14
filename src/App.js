import './App.css';
import Header from './components/header';
import CreatePlaylist from './components/createPlaylist';
import Playlist from './components/playlist.js';
import { getDatabase } from "firebase/database"
import { useState, useEffect } from 'react';

function App() {
  return (
    <div>
      <Header />
      <CreatePlaylist/>
      <Playlist/>
    </div>
  );
}

export default App;
