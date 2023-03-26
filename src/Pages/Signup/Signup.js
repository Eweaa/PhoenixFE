import React, { useRef, useState } from 'react'
import SignupCSS from './Signup.module.css'
import { useAuth } from '../../Auth/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Alert, Button } from 'react-bootstrap'
import Sign from '../../Assets/Sign.png'
import Phoenix from '../../Assets/Phoenix.png'

const Signup = () => {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    if (passwordConfirmRef.current.value !== passwordRef.current.value)
    setError('The Passwords do not match')

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)

  }


  return (
    <div className={SignupCSS.Signup}>
      <div className={[SignupCSS.LD, 'p-5'].join(' ')}>
        <nav className='mb-5'>
          <img src={Phoenix} className='mx-4' alt='phoenix logo'/>
          <h3>Phoenix</h3>
        </nav>
        <div className={SignupCSS.Form}>
          <h2 className='mb-4'>Create An Account</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit} style={{width:'80%'}}>

            <Form.Group id='email' className='mb-2'>
              <Form.Control type='email' ref={emailRef} placeholder='Email' required />
            </Form.Group>

            <Form.Group id='password' className='mb-2'>
              <Form.Control type='password' ref={passwordRef} placeholder='Password' required/>
            </Form.Group>

            <Form.Group id='password-confirm' className='mb-2'>
              <Form.Control type='password' ref={passwordConfirmRef} placeholder='Password Confirmation' required/>
            </Form.Group>

            <Button className='w-100 mt-2' type='submit' disabled={loading}>Create account</Button>

          </Form>
          <div className='w-100 text-center mt-2'>
            Already have an account? <Link to='/login'>Log In</Link>
          </div>
        </div>
      </div>
      <div className={SignupCSS.RD}>
        <img src={Sign} alt='sign up'/>
      </div>
    </div>
  )
}

export default Signup