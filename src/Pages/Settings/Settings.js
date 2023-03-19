import React from 'react'
import { Form, Card, Row } from 'react-bootstrap'

const Settings = () => {
  return (
    <Card>
        <Card.Body>
            <Form>
              <h3>Edit Profile</h3>
              <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type='text'/>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control type='date'/>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type='email'/>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Birthday</Form.Label>
                  <Form.Control type='date'/>
              </Form.Group>
            </Form>
        </Card.Body>
    </Card>
  )
}

export default Settings