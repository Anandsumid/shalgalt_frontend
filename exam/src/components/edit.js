import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
// import { bookService } from './services/bookServices';
import { updateLists} from "../services/listService";
function EditModal(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function submitHandler(e) {

        updateLists({
            id: props.data._id,
            listname: e.target.listname.value,
            uploaddate: e.target.uploaddate.value,
            done: e.target.done.value,
            notdone: e.target.notdone.value,
            finishdate: e.target.finishdate.value,
        })
        e.preventDefault()
    }
    return (
        <>
            <Button variant="light" onClick={handleShow}>
                <img src="./Vector.svg" alt="" />
            </Button>

            <Modal show={show} onHide={handleClose} size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title className="modalTitle">Edit Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="listname">
                            <Form.Control type="text" placeholder="listname" defaultValue={props.data.listname} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="uploaddate">
                            <Form.Control type="number" placeholder="uploaddate" defaultValue={props.data.uploaddate} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="done">
                            <Form.Control type="text" placeholder="done" defaultValue={props.data.done} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="notdone">
                            <Form.Control type="date" placeholder="notdone" defaultValue={props.data.notdone} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="finishdate">
                            <Form.Control type="number" placeholder="finishdate" defaultValue={props.data.finishdate} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="modalButton">
                            Edit Form
                        </Button>
                    </Form></Modal.Body>
                <Modal.Footer>


                </Modal.Footer>
            </Modal>
        </>
    );
}


export default EditModal