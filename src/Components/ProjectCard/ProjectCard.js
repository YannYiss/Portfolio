import React, {forwardRef} from 'react';
import './ProjectCard.css'
import { Card, Button } from 'react-bootstrap';

const ProjectCard = forwardRef((props, ref) => (
        <Card ref={ref}>
            <Card.Img variant="top" src={props.img_src} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.desc}
                </Card.Text>
                <Button variany='primary' onClick={() => props.handleClick(props.title, props.img_src, props.det)}>Details</Button>
                <Button variant="success">Live Demo</Button>
            </Card.Body>
        </Card>
    ))

export default ProjectCard;