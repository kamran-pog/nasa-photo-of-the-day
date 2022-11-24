import { useState, useEffect } from "react";
import axios from 'axios';

function Card() {
    const [data, setdata] = useState()
    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=WqOyyGQK3xaOwUBuywcfMhXKIKod792Ty8lTPUCG")
        .then(response => setdata(response.data))
    }, []);

    console.log(data)

    return(
        <div>
            <h1>{data.title}</h1>
            <h2>{data.date}</h2>
            <img src={data.url}/>
            <h2>{data.explanation}</h2>
        </div>
    )
}

export default Card;