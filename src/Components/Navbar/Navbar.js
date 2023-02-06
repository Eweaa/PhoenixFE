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
        <div className={NavbarCSS.Links}>
            <img src={Phoenix}/>
        </div>
        <div className={NavbarCSS.Profile}>
            <button onClick={handleLogout}>
                <img src={GenericUser}/>
            </button>
        </div>
    </nav>
  )
}

export default Navbar