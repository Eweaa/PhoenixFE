import React from 'react'
import DoctorCSS from './Doctor.module.css'
import Review from './Review/Review';
import img from '../../Assets/GenericUser.jpg'

const Doctor = () => {

  const Reviews = [
    {
      id:1,
      name:"Ramses",
      content:"sjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbg"
    },
    {
      id:2,
      name:"Moses",
      content:"sjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbg"
    },
    {
      id:3,
      name:"Tutankhamun",
      content:"sjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbgsjfsjfjbshjfbshbfsbfbshjbfwbg"
    }
  ]

  return (
    <div>
      <div>
        <div>
          {/* <img src={img} /> */}
        </div>
        <div>
          <h3>Doctor</h3>
          <p></p>
        </div>
      </div>
      <div className={DoctorCSS.Reviews} style={{borderRadius:"15px"}}>
        <h6 className='p-2 mx-4'>Reviews</h6>
        <div>
          {Reviews.map((r) => <Review key={r.id} name={r.name} content={r.content}/>)}
        </div>
      </div>
    </div>
  )
}

export default Doctor