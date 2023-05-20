import './App.css';
import Header from './components/header';
import CreatePlaylist from './components/createPlaylist';
import Playlist from './components/playlist.js';

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
