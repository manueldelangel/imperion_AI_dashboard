import React, {useEffect, useState} from 'react'
import axios from 'axios';

import {useParams} from "react-router-dom";
import CardTag from './CardTag';
  

const TagList = () => {

    const {id}= useParams();

    //console.log(id)

    const [datosID, setDatosID] = useState();
    
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000/data/${id}`).then((res)=> {
            const responseDatos = res.data
            setDatosID(responseDatos);
        });
    }, []);

    return(
        <>
        {datosID ? 
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <CardTag datos = {datosID} />
            </div>

        : <h1>Loading</h1>}

        </>)  
        };

export default TagList;