import React from 'react'
import DoctorCard from '../../Components/DoctorCard/DoctorCard'

const Doctors = () => {

  const url = '/doctors/'

  const Doctors = [
    {
      id:1,
      Name:"Gamal AbdElnasser",
      JD:"Consultant dermatologist",
      Rating:69,
      Number:12345
    },
    {
      id:2,
      Name:"Mohamed AboElroos",
      JD:"Consultant dermatologist",
      Rating:4,
      Number:12345
    },
    {
      id:3,
      Name:"Cleopatra",
      JD:"Consultant dermatologist",
      Rating:5,
      Number:12345
    }
  ]
  return (
    <div>
      {Doctors.map(D => <DoctorCard key={D.id} ID={D.id} Name={D.Name} JD={D.JD} Rating={D.Rating} number={D.Number}/>)}
    </div>
  )
}

export default Doctors