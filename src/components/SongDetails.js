import React from 'react'


function SongDetails(props) {
  return (
    <div className='flex flex-col items-center p-5 m-5'>
        <div className='relative w-fit m-5'>
            <img src={props.song.img} alt='img1' className='block w-[100%] max-w-[250px] rounded-[50%]'/>
        </div>
        <div className='text-white font-bold leading-10'>
            <h2>Now Playing</h2>
            <h2 className='text-[1.5rem]'>{props.song.title}</h2>
            <h2 className='text-[1.2rem]'>{props.song.artist}</h2>
        </div>
    </div>
  )
}

export default SongDetails;