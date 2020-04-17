const express = require('express');
const router = express.Router();
const Fermentation = require('../models/fermentation');
const mongoose = require('mongoose');


////// START OF CRUD //////

// List view //
router.get('/fermentations', (req, res, next) => {
    Fermentation.find({})
        .then(data => res.json(data))
        .catch(e => console.log(e));
});

// Detail view //
router.get('/fermentations/:id', (req, res, next) => {
    Fermentation.findById({
            "_id": mongoose.Types.ObjectId(req.params.id)
        })
        .then(data => res.json(data))
        .catch(e => console.log(e));
});

// // Update detail
// router.put('/projects/:id', (req, res, next) => {
//     res.send('Project was updated.')
// });

// Create Viev //
router.post('/fermentations', (req, res, next) => {

    Fermentation.create(req.body)
        .then(data => res.json(data))
        .catch(e => console.log(e));
});

// Delete View // 
router.delete('/fermentations/:id', (req, res, next) => {
    Fermentation.findByIdAndDelete({
            "_id": mongoose.Types.ObjectId(req.params.id)
        })
        .then(data => res.json(data))
        .catch(e => console.log(e));
});

////// END OF CRUD //////




// Expose all routes
module.exports = router;