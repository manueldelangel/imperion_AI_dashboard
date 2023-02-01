import React from 'react'
import {Box, useTheme, TextField } from "@mui/material";
import {DataFetcher} from 'state/api';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// import { withStyles } from '@material-ui/core/styles';



const BasicTable = () => {
  const [data, setData] = DataFetcher();
  const [threshold, setThreshold] = useState("");
  console.log(threshold)


  useEffect(() => {
    // Fetch data here
    setData(data);
  }, [threshold]);
  

  console.log(data);

  return (

    <>
<Box m="2rem">
        <TextField
          label="Adjust threshold"
          variant="outlined"
          size="small"
          value={threshold}
          onChange={(event) => setThreshold(event.target.value)}
        />
      </Box>
    
    {data ? 
    <Box m= "2rem 2rem">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Date Time</TableCell>
            <TableCell align="center">Classifier Score</TableCell>
            <TableCell align="center">Regressor Score</TableCell>
            <TableCell align="center">DL Classifier Score</TableCell>
            <TableCell align="center">Correction</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            

            <TableRow
            key={row._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
       
            
            >
            <TableCell component="th" scope="row">{row._id}
            </TableCell>
            <TableCell align="right">{row.DateTime}</TableCell>
            <TableCell align="right">{row['Classifier Score'].prediction}</TableCell>
            <TableCell align="right">{row['Regressor Score'].prediction}</TableCell>
            <TableCell align="right">{row['DL Classifier Score'].prediction}</TableCell>
            
            <TableCell align="right" style={{backgroundColor: row["Regressor Score"].prediction >= threshold ? '#43a047' : '#ff1744'}}>
                      {row["Regressor Score"].prediction >= threshold
                        ? "Accepted"
                        : "Rejected"}
            </TableCell>

            </TableRow>

          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Box>
    : <h1>Loading data</h1>}
    </>
  );
}




export default BasicTable