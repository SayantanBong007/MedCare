const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
// var authenticate = require('../authenticate');

// const cors = require('./cors')

const Medicines = require('../modals/medicines');

const medicinerouter = express.Router();

medicinerouter.use(bodyparser.json());


medicinerouter.route('/')
.options((req,res)=>{
    res.statusCode=200;
})
.get((req,res,next)=>{
    Medicines.find(req.query)
    // .populate('comments.author')
    .then((medicines)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(medicines);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.post((req,res,next)=>{
    Medicines.create(req.body)
    .then((medicine)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(medicine);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.put((req,res,next)=>{
    res.end('put operation not supported on /medicines')
})
.delete((req,res,next)=>{
    Medicines.remove({})
    .then((resp)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },(err)=>next(err))
    .catch((err)=>next(err))
});

medicinerouter.route('/:medicineId')
.get((req,res)=>{
    Medicines.findById(req.params.medicineId)
    // .populate('comments.author')
    .then((medicine)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(medicine);

    },(err)=>next(err))
    .catch((err)=>next(err));
})
.post((req,res)=>{
    res.statusCode=403;
    res.end('POST operation is not supported o /medicines/'+req.params.medicineId);

})
.put((req,res)=>{
    console.log(req.params.medicineId)
    const updateFields = req.body;

    // Remove the medicineId from the updateFields
    delete updateFields.medicineId;

    Medicines.findByIdAndUpdate(req.params.medicineId,{
        $set:updateFields
    },{new:true})
    .then((medicine)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(medicine);
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.delete((req,res)=>{
    // Medicines.findByIdAndRemove(req.params.medicineId)
    Medicines.findByIdAndDelete(req.params.medicineId)
    .then((resp)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json')
        res.json(resp);
    },(err)=>next(err))
    .catch((err)=>next(err));
});



module.exports=medicinerouter;