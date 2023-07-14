import React, { useRef } from "react";
import ReactPlayer from "react-player";

function Playlist() {
    const [album, setAlbum] = React.useState([]);
    const playerRef = useRef(null);
    // const spotifyUrl = album.external_urls.spotify.toUrl;
    // <ReactPlayer ref={playerRef} url={album.external_urls.spotify} controls={true}/>
    async function loadMusic() {
        const url = 'https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '39b119d0famshc53a3940801a132p199611jsn6a98ea5839bd',
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            const data = result["tracks"].pop();
            console.log(data);
            const dataArray = Object.values(data);
            setAlbum(dataArray);
        } catch (error) {
            console.error(error);
        }

    };
    // async function viewAlbums() {
    //     albums.map((albums, i) => {
    //         console.log(albums)
    //         return (
    //             <li>
    //                 <button className="btn bg-white">Put album here <span className="badge bg-light text-dark">+</span></button>
    //             </li>
    //         )
    //     })
    // };
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
                {React.Children.toArray(
                album.map((album) => {
                    console.log(album.external_urls)
                    return (
                        <li>
                            <ReactPlayer ref={playerRef} url={album} controls={true}/>
                            <button className="btn bg-white">{album.name}<span className="badge bg-light text-dark">+</span></button>
                        </li>
                    )
                }))}

            </ul>
            <button className="btn btn-warning mb-3" onClick={loadMusic}>Refresh Albums</button>
            {/* <button className="btn btn-warning mb-3" onClick={viewAlbums}>View Albums</button> */}

        </div>
    )
}

export default Playlist;