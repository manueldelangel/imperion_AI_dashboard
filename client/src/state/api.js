import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from "../scenes/table/index.jsx"
import Layout from "scenes/layout"
import Dashboard from "scenes/dashboard"
import Table from "scenes/table"

export default function API() {
  const [data, setData] = useState([]);
  console.log('entered to APi')

  useEffect(() => {
    axios.get('https://localhost:5000/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    // <div>
      <Table data={data} />
    {/* </div>  */}
  );
}