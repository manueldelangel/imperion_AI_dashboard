import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

export const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [timer, setTimer] = useState(new Date());
  const [socketData, setSocketData] = useState(null);
  
  useEffect(() => {

    // const socket = io("http://localhost:5000")

    // socket.on("message_added", (data) => {
    //   console.log("Message_added");
    // });

    const interval = setInterval(() => {
        console.log('This will run every second!');
        axios.get('http://127.0.0.1:5000/outputs').then((res)=> {
            const responseData = res.data
            //console.log(res.data) //array of objects
            setData(responseData);
            console.log(data)

        });
        setTimer(new Date());
    }, 5000);

    return () => clearInterval(interval);

  }, []);



  return [data, setData];
};

// useEffect(() => {
//   const eventSource = new EventSource('http://127.0.0.1:5000/outputs');
//   eventSource.onmessage = (event) => {
//     const response = JSON.parse(event.data);
//     setData(response.data);
//   };

// return () => {
//   eventSource.close();
// };
// }, []);
