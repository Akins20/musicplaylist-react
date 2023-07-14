import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import {database} from '../utils/firebase'
import {ref,push,child,update} from "firebase/database";
import { Button } from "react-bootstrap";


const Header = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === fullName) {
            setFullName(value);
        }
        if (name === email) {
            setEmail(value);
        }
        if (name === password) {
            setPassword(value);
        }
        if (name === confirmPassword) {
            setConfirmPassword(value);
        }
    }

    const handleSubmit = () => {
        console.log(fullName, email, password, confirmPassword)

        let obj = {
            fullName: fullName,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        }
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj
        setShow(false);
        return update(ref(database), updates);

    }
    return (
        <header>
            <div className="navbar navbar-expand-sm bg-white text-light justify-content-end m-2 p-2 pt-1 pb-1 hed">
                <ul className="navbar-nav fest">
                    <li className="nav-item">
                        <button className="btn bg-white btn-md">Contact Us</button>
                    </li>
                    <li className="nav-item">
                        <button variant="warning" className="btn btn-warning btn-md-expand" onClick={handleShow}>
                            Sign Up
                        </button>
                    </li>
                </ul>
                <><div
                    className="modal show"
                    style={{ display: 'block', position: 'initial' }}
                ></div>
                    <Modal
                        {...props}
                        size="md"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={show} onHide={handleClose}><Modal.Header closeButton>
                            <Modal.Title>Sign Up</Modal.Title>
                        </Modal.Header><Modal.Body>
                            <p className="text-center">Sign Up to create your free online playlist</p>
                            <form className="form-group row">
                                <div className="col">
                                    <label htmlFor="fullName" className="form-label">Fullname</label>
                                    <input typeof="text" onChange={(e) => handleInputChange(e)} name="fullName" className="form-control" required></input>

                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input typeof="password" onChange={(e) => handleInputChange(e)} name="password" className="form-control" required></input>
                                </div>
                                <div className="col">
                                    <label htmlFor="email" className="form-label">E-mail</label>
                                    <input typeof="email" onChange={(e) => handleInputChange(e)} name="email" className="form-control" required></input>

                                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                    <input typeof="password" onChange={(e) => handleInputChange(e)} name="confirmPassword" className="form-control" required></input>
                                </div>
                                <button className="btn btn-warning mb-3 mt-3 ml-5 mr-5" onClick={handleSubmit}>Submit</button>
                            </form>
                        </Modal.Body>
                    </Modal>
                </>
            </div>
        </header>
    )
}

export default Header