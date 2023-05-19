import React from 'react'
import ReviewCSS from './Review.module.css'
import img from '../../../Assets/GenericUser.jpg'

const Review = (props) => (
    <div className={[ReviewCSS.Review, 'p-4'].join(' ')}>
        <div className={ReviewCSS.content}>
            <div className='mx-1'>
                <img src={img}/>
            </div>
            <div className='mx-1' style={{width:"100%"}}>
                <p>{props.name}</p>
                <p>{props.content}</p>
            </div>
        </div>
        <div>
            ⭐⭐⭐⭐⭐
        </div>
    </div>
)

export default Review