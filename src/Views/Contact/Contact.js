import React from 'react';
import './Contact.css';
import Sidebar from '../../Components/Sidebar';
import {Form, Button} from 'react-bootstrap';
import '@animxyz/core';
import {XyzTransitionGroup} from '@animxyz/react';

export default function Contact() {
    return (
        <div>
            <Sidebar/>
            <main className='contact_main'>
                <div className='contact_description'>
                    <h2>Let's get in</h2>
                    <h2 id="touch">Touch!</h2>
                </div>
                <Form className='form'transition-style='in:polygon:opposing-corners'>
                    <Form.Group className="mb-3" controlId="name_input">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="last_name">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your last name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="comment">
                        <Form.Label>Password</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Type in your quesiton or comment" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </main>
        </div>
    )
}
