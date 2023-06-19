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
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
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
            <p style={{color:'grey'}}>
                {props.JD}
            </p>
            <p>
                {props.Rating}
            </p>
            <p style={{color:'grey'}}>
                Overall Rating From {props.NoV} Visitors
            </p>
            <p>
                <img src={SVG1} style={{marginRight:'10px'}}/>
                A dermatologist specializing in plastic surgery and burns treatment
            </p>
            <p>
                <img src={SVG2} style={{marginRight:'10px'}}/>
                Start with 2 free sessions
            </p>
            <p>
                <img src={SVG3} style={{marginRight:'10px'}}/>
                {props.number}
            </p>
        </div>
        <div className={DocotrCardCSS.Appointments}>

            <div className={DocotrCardCSS.Time}>
                <p>
                    Today
                </p>
                <ul>
                    <input type="radio" id="12 AM" name="Today" value="12 AM" />
                    <label htmlFor="12 AM">12 AM</label><br />
                    <input type="radio" id="12:30 AM" name="Today" value="12:30 AM" />
                    <label htmlFor="12:30 AM">12:30 AM</label><br />
                    <input type="radio" id="1 AM" name="Today" value="1 AM" />
                    <label htmlFor="1 AM">1 AM</label>
                </ul>
                <button>Book</button>
            </div>

            <div className={DocotrCardCSS.Time}>
                <p>
                    Tomorrow
                </p>
                <ul>
                    <input type="radio" id="T12 AM" name="Today" value="12 AM" />
                    <label htmlFor="T12 AM">12 AM</label><br />
                    <input type="radio" id="T12:30 AM" name="Today" value="12:30 AM" />
                    <label htmlFor="T12:30 AM">12:30 AM</label><br />
                    <input type="radio" id="T1 AM" name="Today" value="1 AM" />
                    <label htmlFor="T1 AM">1 AM</label>
                </ul>
                <button>Book</button>

            </div>

            <div className={DocotrCardCSS.Time}>
                <p>
                    {time.getDate() + 2}/{time.getMonth() + 1} {days[theday]}
                </p>
                <ul>
                    <input type="radio" id="AT12 AM" name="Today" value="12 AM" />
                    <label htmlFor="AT12 AM">12 AM</label><br />
                    <input type="radio" id="AT12:30 AM" name="Today" value="12:30 AM" />
                    <label htmlFor="AT12:30 AM">12:30 AM</label><br />
                    <input type="radio" id="AT1 AM" name="Today" value="1 AM" />
                    <label htmlFor="AT1 AM">1 AM</label>
                </ul>
                <button>Book</button>
            </div>
        </div>
    </div>
  )
}

export default DoctorCard
