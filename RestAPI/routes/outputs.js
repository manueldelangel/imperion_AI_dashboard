const { response } = require('express');
const express = require('express');
const router = express.Router();
const Output = require('../models/Experiment');


router.get('/', async (req,res) => {
    try{
        let outputs = await Output.find();
        res.json(outputs);
        let result = await parsing(outputs);
      
                
    } catch(err){
        res.json({message: err})
    }
});




async function parsing(output){
    let myJSON = await JSON.stringify(output);
    let myJSON2 = await JSON.parse(myJSON)
    //console.log(myJSON2[1].DateTime);
    return myJSON2;
}


module.exports = router;