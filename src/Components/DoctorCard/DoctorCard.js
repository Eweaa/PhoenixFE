import React from "react"
import DocotrCardCSS from './DoctorCard.module.css'
import user from '../../Assets/GenericUser.jpg'


const DoctorCard = (props) => (
    <div className={[DocotrCardCSS.DoctorCard, 'mb-3 p-4'].join(' ')}>
        <div className={DocotrCardCSS.Doctorimg}>
            <img src={user} alt="profile image" className="img-fluid"/>
        </div>
        <div className={DocotrCardCSS.info}>
            <p>
                {props.Name}
            </p>
            <p>
                {props.JD}
            </p>
            <p>
                {props.Rating}
            </p>
            <p>
                Overall Rating From {props.NoV} Visitors
            </p>
            <p>
                Start with 2 free sessions
            </p>
            <p>
                {props.number}
            </p>
        </div>
        <div className={DocotrCardCSS.Appointments}>
            <div>
                <div>
                    Today
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <div>
                <div>
                    Tomorrow
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    </div>
)

export default DoctorCard