import React from "react";

function Playlist() {
    return (
        <div className="playlist">
            <h3>Trending songs</h3>
            <ul className="lisst">
                <li>
                    <button className="btn bg-white">Unavailable by Davido <span className="badge bg-light text-dark">+</span></button>
                </li>
                <li>
                    <button className="btn bg-white">Unavailable by Davido <span className="badge bg-light text-dark">+</span></button>
                </li>
                <li>
                    <button className="btn bg-white">Unavailable by Davido <span className="badge bg-light text-dark">+</span></button>
                </li>
                <li>
                    <button className="btn bg-white">Unavailable by Davido <span className="badge bg-light text-dark">+</span></button>
                </li>
                <li>
                    <button className="btn bg-white">Unavailable by Davido <span className="badge bg-light text-dark">+</span></button>
                </li>
            </ul>
            <button className="btn btn-warning mb-3">View More</button>
        </div>
    )
}

export default Playlist