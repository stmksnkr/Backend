const express = require('express');
const cors = require("cors");
require('./db/config');
const User = require('./db/User')

const app = express();

app.use(express.json());
app.use(cors());


app.get('/',(req,resp)=>{
    resp.send("This is home ")
});


app.post('/register',async (req,resp)=>{
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result)
})



app.listen(5000) 