import './App.css';
import Header from './components/header';
import CreatePlaylist from './components/createPlaylist';
import Playlist from './components/playlist.js';
import Signup from './components/signup';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div>
      <Header />
      <CreatePlaylist/>
      <Playlist/>
      <Signup/>
    </div>
  );
}

export default App;
