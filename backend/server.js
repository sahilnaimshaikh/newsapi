const express = require('express');
const app = express();
const chats = require('./data/data');
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const path = require('path')
const userRouter = require('./routes/userRoutes')
const cors = require('cors')
dotenv.config()

connectDB();

app.use(express.json()) /// to tell the server that we are taking payload as a json from the post reqs.
app.use(cors())
app.get('/', (req, res)=>{
    res.send("server is running");
    console.log(req);
})

app.use('/api/user', userRouter)



app.get('/api/chats', (req, res)=>{
    res.send(chats);
})
app.get('/api/chats/:id', (req, res)=>{
    // console.log(req.params.id)

    // The find() method returns the value of the first element that passes a test. The find() method executes a function for each array element. The find() method returns undefined if no elements are found.

    const singleChat = chats.find((c)=> c._id === req.params.id);

    res.send(singleChat);
})

const PORT = process.env.PORT || 786;

app.listen(PORT, console.log(`hello server is listening on port ${PORT}`));