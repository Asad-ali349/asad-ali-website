import express from 'express';
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import dotevn from 'dotenv';
import cors from 'cors';
import test from './routes/test.js';


dotevn.config();
const app=express();
const PORT=process.env.PORT || 5000;
app.use(bodyParser.json({limit:'300mb'}));
app.use(cors({ origin: true, credentials: true }));


app.use('/test',test);




app.get('/',(req,res)=>{
    res.send("This is test api");
});




mongoose.connect(process.env.CONNECTION_URL_LOCAL).then(()=>{
    app.listen(PORT,console.log(`Server Listening at Port: ${PORT}`));
}).catch((err)=>{
    console.log(err)
})





