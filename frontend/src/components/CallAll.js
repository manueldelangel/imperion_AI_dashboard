import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Card from "./Cards";
import { socketFunction } from '../App';
import { useReducer } from 'react';
//import io from 'socket.io-client'
import "./callall.css"
import Sidebar from "./sidebar/sidebar.js"
import Prueba from "./Prueba"


const TagList = () => {

    const [timer, setTimer] = useState(new Date());
    const [datos, setDatos] = useState();

    useEffect(() => {

        const interval = setInterval(() => {
            console.log('This will run every second!');
            axios.get('http://127.0.0.1:5000/outputs').then((res)=> {
                const responseDatos = res.data
                //console.log(res.data) //array of objects
                setDatos(responseDatos);
                console.log(datos)

            });
            setTimer(new Date());
         }, 5000);

         return () => clearInterval(interval);

    }, []);

    return(
        <div class="container">
            
            <Sidebar/>

            <div class="content">
            <h1 className="title">Imperion Predictions</h1>
                <>
                {datos ? 
            
                    <div style={{display: "flex", flexWrap: "wrap"}}>
                        {datos.map((dato) => (
                            <Card dato={dato} />
                        ))}

                    </div>
                
                : <h1>Loading</h1>}
                
                </>
            </div>
    </div>)  
};

export default TagList;