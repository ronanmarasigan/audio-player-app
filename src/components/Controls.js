import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';


function Controls (props) {
  return (
    <div className='flex gap-8 justify-center mb-5'>
        <button className="skip-btn" onClick={() => props.SkipSong(false)}>
                <FontAwesomeIcon icon={faBackward} />
            </button>
        <button className='flex text-[50px] rounded-[50%]' onClick={() => props.setIsPlaying(!props.isPlaying)}>
            <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay}/>
        </button>
        <button className='flex items-center justify-center text-[20px] ' onClick={() => props.SkipSong()}>
            <FontAwesomeIcon icon={faForward}/>
        </button>
    </div>
  )
}

export default Controls