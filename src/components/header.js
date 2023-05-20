import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Header = ()=>{
    return(
        <header>
            <div className="navbar navbar-expand-sm bg-white text-light justify-content-end m-2 p-2 pt-1 pb-1 hed">
                <ul className="navbar-nav fest">
                    <li className="nav-item">
                        <button className="fest">Contact Us</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-warning">Sign Up</button>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header