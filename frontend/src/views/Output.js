import React, {useState, useEffect} from 'react'
import axios from 'axios'


function Output() {
    const [posts, setPosts] = useState([])

useEffect(() =>{
    axios.get('http://127.0.0.1:5000/data')
    .then(res => { console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
})

    return (
        <div>
            posts
        </div>
    )
}

export default Output
