import React from "react";

function Playlist() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [showData, setShowData] = React.useState(false);
    function loadMusic() {
        setIsLoading(true);
        setShowData(true);
        const data = null;

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
                <div className="jumbotron text-center">
                    <h1>{this.responseText}</h1>
                    <p>{this.responseText.spotify}</p>
                </div>
            }
        });

        xhr.open('GET', 'https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv');
        xhr.setRequestHeader('X-RapidAPI-Key', '39b119d0famshc53a3940801a132p199611jsn6a98ea5839bd');
        xhr.setRequestHeader('X-RapidAPI-Host', 'spotify23.p.rapidapi.com');

        xhr.send(data);
        setIsLoading(false);
        setData(JSON["this.responseText"]);
        if(showData.length > 0) {
            return (
                data.map((showData, name) => {
                    console.log(data);
                    return (
                        <div key={showData._id}>
                            <h1>{showData.name}</h1>
                            <h2>{showData.spotify}</h2>
                        </div>
                    )
                }
            ))
        }
    };
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
            <button className="btn btn-warning mb-3" onClick={loadMusic}>View More</button>
        </div>
    )
}

export default Playlist;