import React from "react";


function CreatePlaylist() {
    return (
        <div className="container mt-5 pt-5">
            <div className="head">
                <h1>Make your Party Fun!</h1>
                <h6>Create your own custom playlist today.</h6>
                <button className="btn btn-warning" onClick={() => {console.log("Create PLaylist Clicked!!!")}}>Create playlist</button>
            </div>
        </div>
    )
}

export default CreatePlaylist