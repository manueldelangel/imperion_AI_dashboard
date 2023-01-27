import React from 'react'
import {Box, useTheme} from "@mui/material";
import {API} from 'state/api';

const Table = () => {

    const {data} = API(); 
  return (
    <div>Table</div>
  )
}

export default Table