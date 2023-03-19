import React, { useRef, useState } from 'react'
import { useAuth } from '../../Auth/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Card, Form, Alert } from 'react-bootstrap'
import LoginCSS from './Login.module.css'
import Sign from '../../Assets/Sign.png'
import Phoenix from '../../Assets/Phoenix.png'

const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch {
            setError('Failed to Sign In')
        }

        setLoading(false)
    }



  return (
    <div className={[LoginCSS.login, 'p-2'].join(' ')}>
        <div className={[LoginCSS.LD, 'p-5'].join(' ')}>
            <nav className='mb-5'>
                <img src={Phoenix} className='mx-4'/>
                <h3>Phoenix</h3>
            </nav>
            <div className={LoginCSS.Form}>
                <h2 className='mb-4'>Log In</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit} style={{width:'80%'}}>

                    <Form.Group id='email' className='mb-2'>
                        <Form.Control type='email' ref={emailRef} placeholder='Email' required />
                    </Form.Group>

                    <Form.Group id='password' className='mb-2'>
                        <Form.Control type='password' ref={passwordRef} placeholder='Password' required/>
                    </Form.Group>

                    <Button className='w-100 mt-2' type='submit' disabled={loading}>Log In</Button>

                    <div className='w-100 mt-2'>
                        <Link to='/forgot-password' style={{textDecoration:'none'}}>Forgot Password</Link>
                    </div>
                </Form>
                <div className='w-100 text-center mt-2'>
                    Don't have an account? <Link to='/signup'>Sign Up</Link>
                </div>
            </div>
        </div>
        <div className={LoginCSS.RD}>
            <img src={Sign}/>
        </div>
    </div>
  )
}

export default Login