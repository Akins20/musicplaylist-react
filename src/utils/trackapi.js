import React from "react";

function loadMusic() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const [showData, setShowData] = React.useState(false);
    setIsLoading(true);
    setShowData(true);
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    xhr.open('GET', 'https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv');
    xhr.setRequestHeader('X-RapidAPI-Key', '39b119d0famshc53a3940801a132p199611jsn6a98ea5839bd');
    xhr.setRequestHeader('X-RapidAPI-Host', 'spotify23.p.rapidapi.com');

    xhr.send(data);
    setIsLoading(false);
    setData(JSON["this.responseText"]);
}

export default loadMusic