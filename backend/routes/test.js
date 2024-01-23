import express from 'express';

const Route = express.Router();

Route.get('/',(req,res)=>{
    res.send('TEST')
})


export default Route;

