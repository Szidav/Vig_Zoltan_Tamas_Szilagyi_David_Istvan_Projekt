const express=require('express');
const sqlite=require('sqlite3');
const dotenv=require('dotenv').config();
const cors=require('cors');
const fileUpload=require('express-fileupload');
const path=require('path');
const mysql=require('mysql')


const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(fileUpload());

app.use('/api/rendezvenyek',require('./routes/RendezvenyekRoute'));
app.use('/api/kedvezmeny_tipusok',require('./routes/KedvezmenyTipusok_Route'));
app.use('/api/kedvezmenyek',require('./routes/KedvezmenyekRoute'));
app.use('/api/jegyek',require('./routes/JegyekRoute'));
app.use('/api/ertekesitesek',require('./routes/ErtekesitesekRoute'));
app.use('/api/kosarak',require('./routes/KosarakRoute'));
app.use('/api/felhasznalok',require('./routes/userroute'));


app.listen(8000,()=>{console.log("Running")});

app.get('/',(req,res)=>{
    res.send("Rendezvények Backend");
});