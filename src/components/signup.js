import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Modal}  from "react-bootstrap";
import Button  from 'react-bootstrap/Button';
import { useState } from "react";

const Signup = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [fullName, setFullName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        if (name == fullName) {
            setFullName(value);
        }
        if (name == email) {
            setEmail(value);
        }
        if (name === password) {
            setPassword(value);
        }
        if (name == confirmPassword) {
            setConfirmPassword(value);
        }
    }

    const handleSubmit = () => {
        console.log(fullName, email, password, confirmPassword)
    }


    return (
        <><div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        ></div>
            <Button variant="warning" onClick={handleShow}>
                Sign Up
            </Button>
            <Modal 
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show} onHide={handleClose}><Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header><Modal.Body>
                    <p className="text-center">Sign Up to create your free online playlist</p>
                    <form className="form-group row" action="#" method="post">
                        <div className="col">
                            <label htmlFor="fullName" className="form-label">Fullname</label>
                            <input typeof="text" name="fullName" className="form-control" required></input>

                            <label htmlFor="password" className="form-label">Password</label>
                            <input typeof="password" name="password" className="form-control" required></input>
                        </div>
                        <div className="col">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input typeof="email" name="email" className="form-control" required></input>

                            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                            <input typeof="password" name="confirmPassword" className="form-control" required></input>
                        </div>
                        <button className="btn btn-warning mb-3 mt-3 ml-5 mr-5" onClick={handleClose}>Submit</button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Signup