import React from 'react'
import './FollowersCard.css'

import { Followers } from '../../Data/FollowersData'
const FollowersCard = () => {
  return (
    <div className="FollowersCard">
        <h3>Who is following you</h3>

        {Followers.map((follower) => {
            return (
                <div className="follower" key={follower.id}> {/* Updated key prop to use unique ID */}
                    <div>
                        <img src={follower.img} alt={`${follower.name}'s profile`} className='followerImage' /> {/* Updated alt attribute */}
                        <div className="name">
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                    </div>
                    <button className='button fc-button' onClick={() => alert(`Followed ${follower.name}`)}> {/* Added onClick handler */}
                        Follow
                    </button>
                </div>
            )
        })}
    </div>
  )
}

export default FollowersCard
