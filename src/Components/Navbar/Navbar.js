import React, { useState } from 'react'
import { useAuth } from '../../Auth/AuthContext'
import { useNavigate } from 'react-router-dom'
import Phoenix from '../../Assets/Phoenix.png'
import GenericUser from '../../Assets/GenericUser.jpg'
import NavbarCSS from './Navbar.module.css'

const Navbar = () => {

    const {currentUser, logout} = useAuth()
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            setError('')
            await logout()
            navigate('/login')
        } catch {
            setError('Failed to Logout')
        }
    }


  return (
    <nav className={[NavbarCSS.nav, 'p-2'].join(' ')}>
        <div className={NavbarCSS.logo}>
            <img src={Phoenix} className='mx-2'/>
            <h2 className='mx-2'>Phoenix</h2>
        </div>
        <div className={NavbarCSS.search}>
            <input type='text' className='p-2' placeholder='search for something here'/>
        </div>
        <div className={NavbarCSS.Profile}>
            <button className={NavbarCSS.bookBtn}>Book Now</button>
            <button>I</button>
            <button>I</button>
            <button onClick={handleLogout}>
                <img src={GenericUser}/>
            </button>
        </div>
    </nav>
  )
}

export default Navbar