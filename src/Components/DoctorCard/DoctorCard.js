import React from "react"
import DocotrCardCSS from './DoctorCard.module.css'
import user from '../../Assets/GenericUser.jpg'
import SVG1 from '../../Assets/Vector (2).svg'
import SVG3 from '../../Assets/Vector (1).svg'
import SVG2 from '../../Assets/Vector.svg'
import { Link } from "react-router-dom"

const DoctorCard = (props) => {

    const url = '/doctors/'
    const time = new Date()
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let theday = time.getDay() + 2

  return (
    <div className={[DocotrCardCSS.DoctorCard, 'mb-3 p-4'].join(' ')}>
        <div className={DocotrCardCSS.Doctorimg}>
            <img src={user} alt="profile image" className="img-fluid"/>
        </div>
        <div className={DocotrCardCSS.info}>
            <Link to={url.concat(props.ID)} style={{textDecoration:'none', color:'black'}}>
                Doctor 
                <b className="mx-1">
                    {props.Name}
                </b>
            </Link>
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
                <img src={SVG1}/>
                A dermatologist specializing in plastic surgery and burns treatment
            </p>
            <p>
                <img src={SVG2}/>
                Start with 2 free sessions
            </p>
            <p>
                <img src={SVG3}/>
                {props.number}
            </p>
        </div>
        <div className={DocotrCardCSS.Appointments}>

            <div className={DocotrCardCSS.Time}>
                <p>
                    Today
                </p>
                <ul>
                    <li>12 AM</li>
                    <li>12:30 AM</li>
                    <li>1 AM</li>
                    <li>1:30 AM</li>
                </ul>
                <button>Book</button>
            </div>

            <div className={DocotrCardCSS.Time}>
                <p>
                    Tomorrow
                </p>
                <ul>
                    <li>12 AM</li>
                    <li>12:30 AM</li>
                    <li>1 AM</li>
                    <li>1:30 AM</li>
                </ul>
                <button>Book</button>

            </div>

            <div className={DocotrCardCSS.Time}>
                <p>
                    {time.getDate() + 2}/{time.getMonth()} {days[theday]}
                </p>
                <ul>
                    <li>12 AM</li>
                    <li>12:30 AM</li>
                    <li>1 AM</li>
                    <li>1:30 AM</li>
                </ul>
                <button>Book</button>
            </div>
        </div>
    </div>
  )
}

export default DoctorCard
