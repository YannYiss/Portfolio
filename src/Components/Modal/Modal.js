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
            <Button variant='success'>Live Demo</Button>
            <Button variant='primary'>GitHub</Button>
            <Button variant='danger' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    );
}
