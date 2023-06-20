import React from 'react'
import DoctorCard from '../../Components/DoctorCard/DoctorCard'

const Doctors = () => {

  const url = '/doctors/'

  const Doctors = [
    {
      id:1,
      Name:"Abdallah Walid",
      JD:"Consultant dermatologist",
      Rating:'⭐⭐⭐⭐',
      Number:12345
    },
    {
      id:2,
      Name:"Salma Ahmed",
      JD:"Consultant dermatologist",
      Rating:'⭐⭐⭐⭐⭐',
      Number:12345
    },
    {
      id:3,
      Name:"Mohamed Elsayed",
      JD:"Consultant therapist",
      Rating:'⭐⭐⭐',
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