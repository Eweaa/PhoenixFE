import React from 'react'
import FriendRequestCSS from './FriendRequest.module.css'
import Img from '../../Assets/GenericUser.jpg'

const FriendRequest = (props) => (
    <div className={[FriendRequestCSS.FriendRequest,'mb-2'].join(' ')}>
        <div className='mx-2'>
            <img src={Img}/>
        </div>
        <div className={FriendRequestCSS.data}>
            {props.name}
            <div>
                <button>Accept</button>
                <button>Decline</button>
            </div>
        </div>
    </div>
)

export default FriendRequest
