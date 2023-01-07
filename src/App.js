import { Player } from "./components";
import { useState, useEffect } from "react";

function App() {

  const [songs] = useState([
    {
      title: 'Just One Yesterday',
      artist: 'Fall Out Boy',
      img: './images/img-1.jpg',
      music: './music/music-1.mp3'
    },
    {
      title: 'Save Rock And Roll',
      artist: 'Fall Out Boy',
      img: './images/img-2.jpg',
      music: './music/music-2.mp3'
    },
    {
      title: 'The Phoenix',
      artist: 'Fall Out Boy',
      img: './images/img-2.jpg',
      music: './music/music-3.mp3'
    },
    {
      title: 'Light Em Up',
      artist: 'Fall Out Boy',
      img: './images/img-4.jpg',
      music: './music/music-4.mp3'
    },
    {
      title: 'Centuries',
      artist: 'Fall Out Boy',
      img: './images/img-5.jpg',
      music: './music/music-5.mp3'
    },
  ]);

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
  }, [currentSongIndex]);

  return (
    <div className="flex items-center justify-center w-full overflow-hidden bg-gradient min-h-[100vh]">
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
