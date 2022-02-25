import React from 'react';
import './Contact.css';
import Sidebar from '../../Components/Sidebar';
import {Form, Button} from 'react-bootstrap';
import '@animxyz/core';
import {XyzTransition} from '@animxyz/react';
import arrow_l from '../../Assets/arow-l.svg';
import arrow_r from '../../Assets/arrow-r.svg';

export default function Contact() {
    return (
        <div>
            <Sidebar/>
            <main className='contact_main'>
                <div className='contact_description'>
                    <div className='contact_h2'>
                        <h2>Let's get in</h2>
                        <h2 id="touch">Touch!</h2>
                    </div>
                    <div className='contact_options'>
                        <div className='arrow_l'>
                            <XyzTransition appearVisible xyz='flip-up-100% delay-20 duration-20'>
                                <img src={arrow_l}alt='social media'/>
                            </XyzTransition>
                            <h3>Connect with me</h3>
                        </div>
                        <div className='arrow_r'>
                            <h3>Drop a message</h3>
                            <XyzTransition appearVisible xyz='flip-up-100% delay-20 duration-20'>
                                <img src={arrow_r} alt='contact form'/>
                            </XyzTransition>
                        </div>
                    </div>
                </div>
                <XyzTransition appearVisible xyz='fade small flip-right flip-down  duration-20'>
                    <Form className='form' action='POST' name='contact' data-netlify='true'>
                        <Form.Group className="mb-3" controlId="name_input">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" name='name' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="last_name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your last name" name='last_name'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" name='email'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="comment">
                            <Form.Label>Question / Comment</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Type in your quesiton or comment" name='comment'/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </XyzTransition>
            </main>
        </div>
    )
}
