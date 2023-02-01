import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import {useEffect, useState} from 'react'
import axios from 'axios';
import Sidebar from "./sidebar/sidebar.js"
import {ConfigParams} from "./ConfigurationParams"
import { UserContext } from './ParamsContext.js';
import {useContext} from 'react'

let file = [
  {
      "DateTime": "2022-11-03 08:32:00",
      "Regressor Score": {
          "prediction": 1.391540597660927,
          "ignored": "False"
      },
      "Classifier Score": {
          "prediction": "0.0",
          "probaPercentile": 61,
          "probas": {
              "0.0": 0.535683250803558,
              "1.0": 0.464316749196442
          },
          "ignored": "False"
      },
      "DL Classifier Score": {
          "prediction": "0.0",
          "probaPercentile": 57,
          "probas": {
              "0.0": 0.6945316791534424,
              "1.0": 0.30546829104423523
          },
          "ignored": "False"
      }
  },
  {
      "DateTime": "2022-11-03 08:33:00",
      "Regressor Score": {
          "prediction": 1.4101456236345729,
          "ignored": "False"
      },
      "Classifier Score": {
          "prediction": "0.0",
          "probaPercentile": 61,
          "probas": {
              "0.0": 0.5351034098043169,
              "1.0": 0.4648965901956831
          },
          "ignored": "False"
      },
      "DL Classifier Score": {
          "prediction": "0.0",
          "probaPercentile": 57,
          "probas": {
              "0.0": 0.7028477787971497,
              "1.0": 0.29715216159820557
          },
          "ignored": "False"
      }
  },
  {
      "DateTime": "2022-11-03 08:34:00",
      "Regressor Score": {
          "prediction": 1.4495720805080257,
          "ignored": "False"
      },
      "Classifier Score": {
          "prediction": "0.0",
          "probaPercentile": 63,
          "probas": {
              "0.0": 0.5094483000659772,
              "1.0": 0.4905516999340228
          },
          "ignored": "False"
      },
      "DL Classifier Score": {
          "prediction": "1.0",
          "probaPercentile": 70,
          "probas": {
              "0.0": 0.5203794240951538,
              "1.0": 0.47962063550949097
          },
          "ignored": "False"
      }
  },
  {
      "DateTime": "2022-11-03 08:35:00",
      "Regressor Score": {
          "prediction": 1.4178869911143357,
          "ignored": "False"
      },
      "Classifier Score": {
          "prediction": "0.0",
          "probaPercentile": 63,
          "probas": {
              "0.0": 0.5091267444252183,
              "1.0": 0.4908732555747816
          },
          "ignored": "False"
      },
      "DL Classifier Score": {
          "prediction": "0.0",
          "probaPercentile": 61,
          "probas": {
              "0.0": 0.6407385468482971,
              "1.0": 0.3592614233493805
          },
          "ignored": "False"
      }
  },
  {
      "DateTime": "2022-11-03 08:36:00",
      "Regressor Score": {
          "prediction": 1.3624016262290268,
          "ignored": "False"
      },
      "Classifier Score": {
          "prediction": "0.0",
          "probaPercentile": 62,
          "probas": {
              "0.0": 0.5194512808261019,
              "1.0": 0.4805487191738981
          },
          "ignored": "False"
      },
      "DL Classifier Score": {
          "prediction": "0.0",
          "probaPercentile": 56,
          "probas": {
              "0.0": 0.7071006298065186,
              "1.0": 0.29289937019348145
          },
          "ignored": "False"
      }
  },
]

const BasicTable= (props) => {
    
    const [timer, setTimer] = useState(new Date());
    const [datos, setDatos] = useState();
    const {value, setValue} = useContext(UserContext);
    console.log('value is: ' + value)

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

       /* axios.get('http://127.0.0.1:5000/data').then((res)=> {
            const responseDatos = res.data
            setDatos(responseDatos);
            //socketFunction()
        });*/
    }, []);

//   const {dato} = props;
//   const {_id, DateTime} = dato;
//   console.log(dato)

function backgroundColor(value){

    if (value ==1) {
        var color = "green";
  } else {
        var color = "red";
  }
    console.log(value)
    return color;
}

function getText(value){
    if (value ==1) {
        var text = "OK";
  } else {
        var text = "Rejected";
  }
    console.log(value)
    return text;
}


  return (

    

    <div class="container">
            
            <Sidebar/>

            <div class="content">
            <h1 className="title">Imperion Predictions</h1>
                <>
                {datos ? 
            
                    <TableContainer component={Paper}>

                    
                    <Table sx={{ minWidth: 1000, backgroundColor: 'transparent'}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right">Classifier Score</TableCell>
                        <TableCell align="right">Regressor Score</TableCell>
                        <TableCell align="right">DL Classifier Score</TableCell>
                        <TableCell align="right">Correction</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {datos.map((row) => (
            
                        
                        
                        
                        <TableRow
                            key={row._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                            {row.id}
                            </TableCell>
                            <TableCell align="right">{row.DateTime}</TableCell>
                            <TableCell align="right">{row['Classifier Score'].prediction}</TableCell>
                            <TableCell align="right">{row['Regressor Score'].prediction}</TableCell>
                            <TableCell align="right">{row['DL Classifier Score'].prediction}</TableCell>
                            <TableCell align="right" style={{backgroundColor: backgroundColor(row['Classifier Score'].prediction)}}> {getText(row['Classifier Score'].prediction)}</TableCell>
                            
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
                
                : <h1>Loading</h1>}
                
                </>
            </div>
    </div>

    
  );
}

export default BasicTable;
