import React from 'react'
import Camera from '../../Assets/Vector (2).png'
import BurnCardCSS from './BurnCard.module.css'

const BurnDegree = () => {
  return (
    <div className='p-2'>
      <h2 style={{textAlign: 'center', color: '#008894', textShadow: '0px 4px 4px rgba(0, 0, 0, 0.12);'}} className='px-2 pb-2'>Identify the degree of burn</h2>
      <div className={[BurnCardCSS.BurnCard, 'p-4'].join(' ')}>
        <div>

        </div>
        <label for='uploadFile'>
          <img src={Camera}/> <br />
          Drop an image here <br />
          <input type='file' id='uploadFile'/>
        </label>
        <button className='p-2'>Result</button>
      </div>
    </div>
  )
}

export default BurnDegree