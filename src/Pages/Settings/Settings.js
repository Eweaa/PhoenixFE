import React from 'react'
import SettingsCSS from './Settings.module.css'
import { Form, Card, Row, Col, Button } from 'react-bootstrap'
import Img from '../../Assets/GenericUser.jpg'

const Settings = () => {
  return (
    <div className='p-4'>
      <Card className={[SettingsCSS.SForm, 'p-2'].join(' ')}>
          <Card.Body>
              <Form>
                <h3>Edit Profile</h3>
                <Form.Group className={[SettingsCSS.ProfileImg, 'mb-3'].join(' ')}>
                  <label>
                    <input type='file'/>
                    <img src={Img} alt='ass' />
                  </label>
                </Form.Group>
                <Row className='mb-4'>

                  <Col>
                    <Form.Group className='mb-3'>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type='text'/>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email'/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type='text' placeholder='0123456789'/>
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group className='mb-3'>
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control type='date'/>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Bio</Form.Label>
                        <Form.Control type='text'/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Location</Form.Label>
                        <Form.Control type='text'/>
                    </Form.Group>
                  </Col>

                </Row>

                <Form.Group className='mb-4'> 
                  <Form.Label>Gender</Form.Label>
                  <Col>
                    <Form.Check
                      type="radio"
                      label="Male"
                      name="Gender"
                      id="Male"
                    />
                    <Form.Check
                      type="radio"
                      label="Female"
                      name="Gender"
                      id="Female"
                    />
                  </Col>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Change Password</Form.Label>
                  <Col sm={6}>
                    <Form.Control type='text' placeholder='Current Password' className='mb-2'/>
                    <Form.Control type='text' placeholder='New Password' className='mb-2'/>
                    <Form.Control type='text' placeholder='Reenter New Password'/>
                  </Col>
                </Form.Group>

                <Button className={SettingsCSS.SBtn} type='submit'>Save</Button>

              </Form>
          </Card.Body>
      </Card>

    </div>
  )
}

export default Settings