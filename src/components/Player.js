import React, {useState, useRef, useEffect} from 'react';
import { Controls, SongDetails } from '.';

function Player(props)  {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    
    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        }
        else {
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;

                if (temp > props.songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = props.songs.length - 1;
                }

                return temp;
            });
        }
    }

  return (
    <div className='block p-[30px] text-center bg-primary w-[500px] rounded-[24px]'>
        <audio src={props.songs[props.currentSongIndex].music} ref={audioEl}></audio>
        <SongDetails song={props.songs[props.currentSongIndex]}/>
        <Controls 
            isPlaying={isPlaying} 
            setIsPlaying={setIsPlaying} 
            SkipSong={SkipSong}
        />
        <p><strong>Next up:</strong> {props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</p>
    </div>
  )
}

export default Player;