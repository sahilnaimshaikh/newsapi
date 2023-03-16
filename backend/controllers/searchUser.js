const users = require('../models/userModel')
const asyncHandler = require('express-async-handler')

const searchUser = asyncHandler(async (req, res)=>{
    console.log("inside search user")
    const {email} = req.body
    const user = await users.findOne({email})
    if(user){
        console.log("user found ")
        
        res.status(201).json({
            _id : user._id,
            email : user.email,
            name : user.name,
            userFound : "True"
        })
    }

    else{
        res.status(400).json({
            userFound : "False"
        })
    }
})

module.exports = searchUser