import * as React from 'react';
import {useEffect, useState} from 'react'
import axios from 'axios';
import Sidebar from "./sidebar/sidebar.js"
import Prueba from "./Prueba"
import {useContext} from 'react'
import { UserContext } from './ParamsContext';


//
const ConfigParams = () => {
    
    const [threshold, setThreshold] = useState();
    const {value, setValue} = useContext(UserContext);
    console.log('theshold: ' + threshold)
    console.log('value: ' + value)

    return(
        
        <div className="container">
            <Sidebar/>

            <div className='content'>
                <h1>Configuration Parameters</h1>
                    <h2>Select Output threshold</h2>
                    <form>
                        <label>Threshold: </label>
                        <input 
                            type="text" 
                            name='threshold'
                            value={threshold}
                            onChange = {(e) => setThreshold(e.target.value)}/>  
                    </form>
                <h1>{threshold}</h1>
               
                <button onClick={ () => setValue (threshold)}>change value</button> 
               
                

                    
            </div>
            {/* <Prueba threshold={threshold} /> */}

        </div>)  
};

export default ConfigParams;
