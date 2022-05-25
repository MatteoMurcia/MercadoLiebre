const express = require('express');
const path = require('path');
const PORT = process.eventNames.PORT || 3000;

const app = express();
const publicFolderPath = path.resolve(__dirname,'./public');
app.use(express.static(publicFolderPath));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/home.html'));
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/login.html'));
})

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'/views/register.html'));
})

app.listen(PORT,()=>{
    console.log('running..')
});