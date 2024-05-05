const mysql = require('mysql');
const express = require('express');

const conn = mysql.createConnection({
    user: "admin",
    password: "rendezveny123",
    database: "rendezvenyek"
});

const kedvezmeny_Tipusok_Lista = (req, res) => {
    conn.query("SELECT * FROM kedvezmeny_tipusok", (err, rows) => {
        if (err) 
        {

            res.status(400).json(err);
        } 
        else 
        {
            res.status(200).json(rows);
        }
    });
};

const kedvezmeny_Tipus_Torles = (req, res) => {
    const [Id]=req.params.Id;
    
    conn.query(`DELETE FROM kedvezmeny_tipusok WHERE Id=?`
    ,[Id]
    ,(err) => {
        if (err)
        {
            res.status(400).json(err);
        } 
        else 
        {
            res.status(200).json({ message: "Kedvezmény típus sikeresen törölve!"});
        }
    });
};


const kedvezmeny_Tipus_Felvetele=(req,res)=>{
    const {nev}=req.body;

    conn.query(`INSERT INTO kedvezmeny_tipusok (nev) VALUES (?)`
    ,[nev]
    ,(err)=>{
        if (err)
        {
            res.status(400).json(err);
        } 
        else 
        {
            res.status(201).json({ message: "Új kedvezmény típus sikeresen felvéve" });
        }
    });
};

const kedvezmeny_Tipus_Modositasa=(req,res)=>{
    const {Id,nev}=req.body;
    
    conn.query(`UPDATE kedvezmeny_tipusok SET nev=? WHERE Id=?`
    ,[nev,Id]
    ,(err)=>{
        if(err){
            res.status(500).send(err);
        }
        else
        {
            res.status(200).json({message:"A kedvezmény típus módosítása sikeres!"})
        }
    });
};

module.exports={
    kedvezmeny_Tipusok_Lista,
    kedvezmeny_Tipus_Torles,
    kedvezmeny_Tipus_Felvetele,
    kedvezmeny_Tipus_Modositasa
};
