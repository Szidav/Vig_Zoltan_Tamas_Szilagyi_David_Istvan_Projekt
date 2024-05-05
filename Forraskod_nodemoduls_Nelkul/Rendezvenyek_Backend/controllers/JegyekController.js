const mysql = require('mysql');
const conn = mysql.createConnection({
    user: "admin",
    password: "rendezveny123",
    database: "rendezvenyek"
});

const jegyek_Lista = (req, res) => {
    conn.query("SELECT * FROM jegyek", (err, rows) => {
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

const jegyek_Torlese=(req, res)=>{
    const [Id] =req.params.Id;
    conn.query(`DELETE FROM jegyek WHERE Id=?`
    ,[Id]
    ,(err) =>{
        if(err) 
        {
            res.status(400).json(err);
        }
        else
        { 
            res.status(200).json({message: "Jegy sikeresen törörlve!"});
        }
    });
};

const jegyek_Felvetele=(req,res)=>{

    const {ar,ertekesitettek_db,erv_kezdete,tipus,kedvezmeny,erv_vege,RDY_id}=req.body;

    conn.query(`INSERT INTO jegyek (ar,ertekesitettek_db,erv_kezdete,tipus,kedvezmeny,erv_vege,RDY_id) VALUES(?,?,?,?,?,?,?)`
    ,[ar,ertekesitettek_db,erv_kezdete,tipus,kedvezmeny,erv_vege,RDY_id]
    ,(err)=>{
        if (err) 
        {
            res.status(400).send(err);
        } 
        else 
        {
            res.status(201).json({ message: "Jegy sikeresen felvéve"});
        }
    });
};

const jegyek_Modositasa=(req,res)=>{
    const {Id,ar,ertekesitettek_db,erv_kezdete,tipus,kedvezmeny,erv_vege,RDY_id}=req.body;
    
    conn.query(`UPDATE jegyek SET ar=?,ertekesitettek_db=?,erv_kezdete=?,tipus=?,kedvezmeny=?,erv_vege=?,RDY_id=? WHERE Id=?`
    ,[ar,ertekesitettek_db,erv_kezdete,tipus,kedvezmeny,erv_vege,RDY_id,Id]
    ,(err)=>{
        if(err){
            res.status(500).send(err);
        }
        else
        {
            res.status(200).json({message:"A jegy módosítása sikeres!"})
        }
    });
};


module.exports = {
    jegyek_Lista,
    jegyek_Torlese,
    jegyek_Felvetele,
    jegyek_Modositasa
};
