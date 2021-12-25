import { useState, useEffect } from 'react';
import Player from './components/Player/Player'

function App() {
  const [songs] = useState([
    {
      title: "Sad machine",
      artist: "Porter Robinson",
      img_src: "./images/sadmachine.webp",
      src: "./songs/sadmachine.mp3"
    },
    {
      title: "Shelter",
      artist: "Porter Robinson",
      img_src: "./images/shelter.jpg",
      src: "./songs/shelter.mp3"
    },
    {
      title: "Mirror",
      artist: "Porter Robinson",
      img_src: "./images/mirror.jpg",
      src: "./songs/mirror.mp3"
    },
    {
      title: "Something Comforting",
      artist: "Porter Robinson",
      img_src: "./images/something.jpg",
      src: "./songs/something.mp3"
    },
  ])

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, []);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
