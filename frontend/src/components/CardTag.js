import React from 'react'
import {useHistory} from "react-router-dom"

const CardTag = (props) => {

    const {dato} = props;
    console.log(props.datos)

    let history = useHistory();
    //console.log(dato)

    return(
        <div style={{ backgroundColor: "grey", margin: "10px", padding: "10px"}} >
            <h4> CIG12_BD_258_004: {props.datos.CIG12_BD_258_004}</h4>

        </div>
    );
};

export default CardTag ;