const express = require('express');
const registerUser = require('../controllers/userController')
const searchUser = require('../controllers/searchUser')
const router = express.Router()
const userLogin = require('../controllers/userLogin')

router.post('/', registerUser)
router.post('/login', userLogin)
// router.post('/', (req, res)=>{
//     res.send("it is working")
// })

// router.get('/',(req, res)=>{
//     res.send("it is working")
// })

router.post('/search', searchUser)


module.exports = router