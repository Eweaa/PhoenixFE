import React from 'react'
import DoctorCard from '../../Components/DoctorCard/DoctorCard'

const Doctors = () => {
  const Doctors = [
    {
      id:1,
      Name:"Kolo y Waleed",
      Rating:69,
    },
    {
      id:2,
      Name:"Mohamed Aboteez",
      Rating:4,
    },
    {
      id:3,
      Name:"mo3ad elzo8bi",
      Rating:5,
    }
  ]
  return (
    <div>
      {Doctors.map(D => <DoctorCard key={D.id} Name={D.Name} Rating={D.Rating}/>)}
    </div>
  )
}

export default Doctors