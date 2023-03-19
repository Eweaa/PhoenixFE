import React from 'react'
import FriendRequestCSS from './FriendRequest.module.css'

const FriendRequest = (props) => (
    <div className={[FriendRequestCSS.FriendRequest,'mb-2'].join(' ')}>
        <div>
            <p>image</p>
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
