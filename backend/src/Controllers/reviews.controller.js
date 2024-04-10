import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js"
import { Review } from '../model/reviews.js';

const getreview = asyncHandler(async(req,res)=>{
    const review = await Review.find(req.query).populate('author');

    if (!review) {
        throw new ApiError(500, "Something went wrong while fetching the review")
    }

    return res.status(201).json(
        new ApiResponse(200, review, "get review Successfully"))
})

const postreview = asyncHandler(async(req,res)=>{
    if(req.body!=null){
        req.body.author=req.user._id;
       const review = await Review.create(req.body);
       const data = await Review.findById(review._id).populate('author');

       if(!data){
         throw new ApiError(500, "Something went wrong while posting the review");
       }
       return res.status(201).json(
        new ApiResponse(200, data, "post review Successfully"))
    }
    else {
        throw new ApiError(500, "review not found in request body");
    }
})

const getspecificReview = asyncHandler(async(req,res)=>{
    const review = await Review.findById(req.params.reviewId).populate('author');
    if(!review){
        throw new ApiError(500, "Something went wrong while getting the review");
      }
      return res.status(201).json(
       new ApiResponse(200, review, "get review Successfully"))
})

const putspecificReview = asyncHandler(async(req,res)=>{
    const review = await Review.findById(req.params.reviewId);
    if(review!=null){
        if(!review.author.equals(req.user._id)){
            return res.status(403).json(
                new ApiResponse(200, review, "You are not authorized to update this review"))
        }
        req.body.author = req.user._id;
        const data = await Review.findByIdAndUpdate(req.params.reviewId,{
            $set:req.body
        },{new:true});
        if(!data){
            throw new ApiError(500, "Something went wrong while updating the review");
        }
        return res.status(201).json(
          new ApiResponse(200, data, "update review Successfully"))
    }
    else{
        return res.status(201).json(
            new ApiResponse(404, "failure", 'review'+req.params.reviewId+'not found'));
    }
})

const deleteReview = asyncHandler(async(req,res)=>{
    const review =await  Review.findById(req.params.reviewId);
    if(review!=null){
        if(!review.author.equals(req.user._id)){
            return res.status(403).json(
                new ApiResponse(403, review, "You are not authorized to update this review"))
        }
        const data = await Review.findByIdAndRemove(req.params.reviewId);
        if(!data){
            throw new ApiError(500, "Something went wrong while deleting the review");
        }
        return res.status(201).json(
            new ApiResponse(200, data, "Review delete successfully"));
    }
    else{
        return res.status(201).json(
            new ApiResponse(404, "failure", 'review'+req.params.reviewId+'not found'));
    }
})

export {
    getreview,
    postreview,
    getspecificReview,
    putspecificReview,
    deleteReview
}
