
asyncHandler = require('express-async-handler')
const users = require('../models/userModel')
const generateToken = require('../config/generateToken')


const login = asyncHandler(async(req, res)=>{
    // fetching the form data 
    const { email, password} = req.body
    
    // checking if any detail is missing?
    if(!email || !password){
        res.status(400)
        throw new Error("Please enter all the details");
    }

    // checking if a user already exists or not
    const userExists = await users.findOne({email})
    if(userExists){
        res.status(200).json({
            _id : userExists._id,
            name : userExists.name,
            email : userExists.email,
            token: generateToken(userExists._id.toJSON())
        })
    }




});

module.exports = login