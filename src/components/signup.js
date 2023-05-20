import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {Modal}  from "react-bootstrap";
import Button  from 'react-bootstrap/Button';
import { useState } from "react";

const Signup = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <><div
            className="modal show"
            style={{ display: 'none', position: 'initial' }}
        ></div>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>
            <Modal show={show} onHide={handleClose}><Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header><Modal.Body>
                    <p className="text-center">Sign Up to create your free online playlist</p>
                    <form className="form-group row">
                        <div className="col">
                            <label htmlFor="fullName" className="form-label">Fullname:</label>
                            <input typeof="text" name="fullName" className="form-control"></input>

                            <label htmlFor="password" className="form-label">Password:</label>
                            <input typeof="password" name="password" className="form-control"></input>
                        </div>
                        <div className="col">
                            <label htmlFor="email" className="form-label">E-mail:</label>
                            <input typeof="email" name="email" className="form-control"></input>

                            <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                            <input typeof="password" name="confirmPassword" className="form-control"></input>
                        </div>
                        <button className="btn btn-warning mb-3 mt-3 ml-5 mr-5" onClick={handleClose}>Submit</button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Signup