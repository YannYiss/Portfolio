import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function Popup(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            {props.content.title}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5>Project Details</h5>
            <p>
            {props.content.det}
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='primary' href={props.content.git} target='_blank'>GitHub</Button>
            <Button variant='success' href={props.content.demo} target='_blank'>Live Demo</Button>
        </Modal.Footer>
        </Modal>
    );
}
