import React from 'react'
import Post from '../Home/Post'
import Vid1 from '../../Assets/vid1.mp4'

const Watch = () => {
  return (
    <div className='p-4'>
      <video width="750" height="500" controls >
        <source src={Vid1} type="video/mp4"/>
      </video>
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Watch