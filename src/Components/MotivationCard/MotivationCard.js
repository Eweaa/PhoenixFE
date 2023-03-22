import React from 'react'
import MotivationCardCSS from './MotivationCard.module.css'
import Img from '../../Assets/doctor.jpg'

const MotivationCard = (props) => {
  return (
    <div className={[MotivationCardCSS.MotivationCard, 'p-4 mb-2'].join(' ')}>
        <h2 className='p-1'>{props.name}</h2>
        <div className={MotivationCardCSS.Container}>
            <div className={[MotivationCardCSS.imgContainer]}>
                <img src={Img} alt='test'/>
            </div>
            <div className={[MotivationCardCSS.Txt, 'p-2'].join(' ')}>
                {props.text}
            </div>
        </div>
    </div>
  )
}

export default MotivationCard