import React from 'react';
import PatientCSS from './Patient.module.css'
import User from '../../../Assets/GenericUser.jpg'
import { Link } from 'react-router-dom';

const Patient = () => {
  return (
    <div className='p-4'>
      <div className={[PatientCSS.Patient, 'p-4'].join(' ')}>
        <div className={[PatientCSS.User, 'p-2 mb-4'].join(' ')}>
          <img src={User}/>
          <p style={{display:'inline'}} className='mx-2 '>
            Ahmed
          </p>
        </div>
        <div className={[PatientCSS.Nddiv, 'p-4'].join(' ')}>
          <div className={[PatientCSS.result, 'p-2 mb-4'].join(' ')}>The patient result is “Second degree of burn”</div>
          <button className='p-2'>Open conversation with patient</button>
          <p>
          We recommend <Link>this video</Link> to the patient

          </p>
        </div>
      </div>
    </div>
  )
}

export default Patient