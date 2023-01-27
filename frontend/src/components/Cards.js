import React from 'react'
import {useHistory} from "react-router-dom"
//import "./callall.css";

const Card = (props) => {
    const {dato} = props;
    const {_id, DateTime} = dato;

    let history = useHistory();
    //console.log(dato)

    return(
        <div style={{ backgroundColor: "grey", margin: "10px", padding: "10px"}} onClick={()=> history.push(_id)}>
            <h4> Id: {_id} </h4>
            <h4> Date: {DateTime} </h4>
        </div>
    );
};

export default Card;