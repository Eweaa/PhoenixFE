import React from 'react'
import HomecardCSS from './HomeCard.module.css'

const HomeCard = () => {
  return (
    <div className={[HomecardCSS.HomeCard, 'mb-3 p-4'].join(' ')}>
        HomeCard
    </div>
  )
}

export default HomeCard