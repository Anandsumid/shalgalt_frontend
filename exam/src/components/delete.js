import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button";
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { deleteLists} from '../services/listService';
function DeleteModal(props) {
    const [show, setShow] = useState(false);


    function submitHandler(e) {
        deleteLists({
            id: props.data._id,
        })
        e.preventDefault()
    }
    return (
        <>
            <Modal.Body>
                <Form onSubmit={submitHandler}>
                    <div className="delete">
                        <Button variant="primary" type="submit">
                            <img src="./trash.svg" alt="" />
                        </Button>
                    </div>
                </Form></Modal.Body>

        </>
    );
}


export default DeleteModal