import React, {forwardRef} from 'react';
import './ProjectCard.css'
import { Card, Button } from 'react-bootstrap';

const ProjectCard = forwardRef((props, ref) => (
    <Card ref={ref}>
        <Card.Img variant="top" src={props.img_src} />
        <Card.Body>
            <div>                
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
                {props.desc}
            </Card.Text>
            </div>
            <div className='buttons'>
            <Button variany='primary' onClick={() => props.handleClick(props.title, props.img_src, props.det, props.demo, props.git)} >Details</Button>
            <Button variant="success" href={props.demo} target='_blank'>Live Demo</Button>
            </div>
        </Card.Body>
    </Card>
))

export default ProjectCard;