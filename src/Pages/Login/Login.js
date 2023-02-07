import React, { useRef, useState } from 'react'
import { useAuth } from '../../Auth/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { Button, Card, Form, Alert } from 'react-bootstrap'
import LoginCSS from './Login.module.css'

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
            <h1>Phoenix</h1>
            <h1>Start your journyey with us.</h1>
            <p>Discover the world's best Community of burn survivors</p>
        </div>
        <div className={[LoginCSS.RD, 'p-5'].join(' ')}>
                    <h2 className='mb-2'>Log In</h2>
                    <div className='w-100 mb-4'>
                        Don't Have An Account? <Link to='/signup' style={{textDecoration:'none'}}>Sign Up</Link>
                    </div>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>

                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />

                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required />

                        <Button className='mt-2' type='submit' disabled={loading}>Log In</Button>
                        <div className='w-100 mt-2'>
                            <Link to='/forgot-password' style={{textDecoration:'none'}}>Forgot Password</Link>
                        </div>
                    </Form>
        </div>
    </div>
  )
}

export default Login