const { response } = require('express');
const express = require('express');
const Post = require('../models/Post');
const router = express.Router();
const Output = require('../models/Experiment');


// ------ Router get All -----//
router.get('/', async (req,res) => {
    try{
        // let posts = await Post.find({ DateTime: {$gt: new Date('2022-08-09T20:03:31.000Z')}})//.sort({_id:-1}).limit(5);
        let posts = await Post.find({}).sort({_id:-1}).limit(2);
        res.json(posts);
        let result = await parsing(posts);
        
                
    } catch(err){
        res.json({message: err})
    }
});

// ------ Router get one -----//

router.get('/:id', async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        res.json(post);
                
    } catch(err){
        res.json({message: err})
    }
});

// ------ Router post one -----//

router.post('/', async (req,res) => {
    const post = new Post({
        CIG12_BD_258_004: req.body.CIG12_BD_258_004,
        DateTime: req.body.DateTime
    });
    
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(err){
        res.json({message: err});
    }
});


async function parsing(output){
    let myJSON = await JSON.stringify(output);
    let myJSON2 = await JSON.parse(myJSON)
    return myJSON2;
}


module.exports = router;