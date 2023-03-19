import React from "react"
import DocotrCardCSS from './DoctorCard.module.css'

const DoctorCard = (props) => (
    <div className={[DocotrCardCSS.DoctorCard, 'mb-2'].join(' ')}>
        {props.Name}
        {props.Rating}
    </div>
)

export default DoctorCard