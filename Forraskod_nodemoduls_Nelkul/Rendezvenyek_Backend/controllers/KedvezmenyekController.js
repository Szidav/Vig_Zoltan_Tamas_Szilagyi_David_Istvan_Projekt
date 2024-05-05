const mysql = require('mysql');
const conn = mysql.createConnection({
    user: "admin",
    password: "rendezveny123",
    database: "rendezvenyek"
});


const kedvezmenyek_Lista=(req, res)=>{
    conn.query("SELECT * FROM kedvezmenyek", (err, rows) => {
        if(err) 
        {
            res.status(400).json(err);
        } 
        else 
        {
            res.status(200).json(rows);
        }
    });
};


const kedvezmenyek_Torles=(req, res)=>{
    conn.query(`DELETE FROM kedvezmenyek WHERE RDY_Id=? AND JGY_Id=? AND KTS_Id=?`
    ,[req.params.RDY_Id, req.params.JGY_Id, req.params.KTS_Id]
    ,(err) => {
        if(err) 
        {
            res.status(400).json(err);
        } 
        else 
        {    
            res.status(200).json({ message: "Kedvezmény  törölve", kedvezmenyek: rows });
        }
    });
};

const kedvezmenyek_Felvetele =(req, res)=>{
    const { RDY_Id, JGY_Id, KTS_Id, kezdo_d, veg_d, mertek} = req.body;

    conn.query(`INSERT INTO kedvezmenyek (RDY_Id, JGY_Id, KTS_Id, kezdo_d, veg_d, mertek) VALUES (?,?,?,?,?,?)`
    ,[RDY_Id,JGY_Id,KTS_Id,kezdo_d,veg_d,mertek]
    ,(err) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json({ message: "Új kedvezmény sikeresen felvéve" });
        }
    });
};


module.exports = {
    kedvezmenyek_Lista,
    kedvezmenyek_Torles,
    kedvezmenyek_Felvetele
};
