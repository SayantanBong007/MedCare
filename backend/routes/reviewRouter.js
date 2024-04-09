const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// var authenticate = require('../authenticate');
// const cors = require('./cors');

const reviews = require('../modals/reviews');

const reviewRouter = express.Router();

reviewRouter.use(bodyParser.json());

reviewRouter.route('/')
.options((req,res)=>{
    res.sendStatus(200)
})
.get((req,res,next)=>{
    reviews.find(req.query)
    .populate('author')
    .then((reviews)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(reviews);
    },(err)=>next(err))
    .catch((err)=>next(err))
})
.post((req,res,next)=>{
    if(req.body!=null){
        req.body.author=req.user._id;
        reviews.create(req.body)
        .then((review)=>{
            reviews.findById(review._id)
            .populate('author')
            .then((review)=>{
                res.statusCode=200;
                res.setHeader('Content-Type','application/json');
                res.json(review);
            })
        },(err)=>next(err))
        .create((err)=>next(err));
    }
    else{
        err = new Error('review not found in request body');
        err.status=404;
        return next(err);
    }
})
.put((req,res,next)=>{
    res.statusCode=403;
    res.end('PUT operation not supported on /reviews/');
})
.delete((req,res,next)=>{
    reviews.remove({})
    .then((resp)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(resp);
    },(err)=>next(err))
    .catch((err)=>next(err));
})

reviewRouter.route('/:reviewId')
.options((req,res)=>{
    res.sendStatus(200);
})
.get((req,res,next)=>{
    reviews.findById(req.params.reviewId)
    .populate('author')
    .then((review)=>{
        res.statusCode=200;
        res.setHeader('Content-Type','application/json')
        res.json(review);

    },(err)=>next(err))
    .catch((err)=>next(err))
})
.post((req,res,next)=>{
    res.statusCode=403;
    res.end('POST operation not supported on /reviews/'+req.params.reviewId)
})
.put((req,res,next)=>{
    reviews.findById(req.params.reviewId)
    .then((review)=>{
        if(review!=null){
            if(!review.author.equals(req.user._id)){
                var err = new Error('You are not authorized to update this review')
                err.status = 403;
                return next(err);
            }
            req.body.author = req.user._id;
            reviews.findByIdAndUpdate(req.params.reviewId,{
                $set:req.body
            },{new:true})
            .then((review)=>{
                reviews.findById(review._id)
                .populate('author')
                .then((review)=>{
                    res.statusCode=200;
                    res.setHeader('Content-Type','application/json');
                    res.json(review);
                })
            },(err)=>next(err));
        }
        else{
            err = new Error('review'+req.params.reviewId+'not found');
            err.status = 404;
            return next(err);
        }
        
    },(err)=>next(err))
    .catch((err)=>next(err));
})
.delete((req,res,next)=>{
    reviews.findById(req.params.reviewId)
    .then((review)=>{
        if(review!=null){
            if(!review.author.equals(req.user._id)){
                var err = new Error('You are not authorized to delete this review');
                err.status = 403;
                return next(err);
            }
            reviews.findByIdAndRemove(req.params.reviewId)
            .then((resp)=>{
                res.statusCode=200;
                res.setHeader('Content-Type','application/json');
                res.json(resp);
            },(err)=>next(err))
            .catch((err)=>next(err));
        }
        else{
            err = new Error('review'+req.params.reviewId+'not found');
            err.status=404;
            return next(err);
        }
    },(err)=>next(err))
    .catch((err)=>next(err));
})

module.exports = reviewRouter;