import express from 'express';
import jwt from 'jsonwebtoken';
import {middleware} from './middleware';
import JWT_SECRET from './config';

const app = express();

app.post('/login',(req,res)=>{

});

app.post('/register',(req,res)=>{

});
app.post('/create-room',middleware,(req,res)=>{

})l
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});