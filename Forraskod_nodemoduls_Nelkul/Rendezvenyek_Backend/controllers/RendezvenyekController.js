const mysql=require('mysql');
const conn=mysql.createConnection({
    user:"admin",
    password:"rendezveny123",
    database:"rendezvenyek"
});

const rendezvenyek_Lista=(req,res)=>{
    conn.query("SELECT * FROM rendezvenyek",(err,rows)=>{
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

const rendezvenyek_Torles=(req,res)=>{
    const [Id] = req.params.Id;
    conn.query(`DELETE FROM rendezvenyek WHERE Id=?`
    ,[Id]
    ,(err)=>{
        if(err)
        {
            res.status(400).json(err);
        }
        else
        {
            res.status(200).json({message:"A rendezvény sikeresen törölve!"})
        }
    });
};

const rendezvenyek_Beszurasa=(req,res)=>{
    const {nev,hely_cim,eloadok,kezdo_d,veg_d,max_letszam,kep}=req.body;

    conn.query(`INSERT INTO rendezvenyek (nev,hely_cim,eloadok,kezdo_d,veg_d,max_letszam,kep) VALUES(?,?,?,?,?,?,?)`
    ,[nev,hely_cim,eloadok,kezdo_d,veg_d,max_letszam,kep]
    ,(err)=>{
        if(err)
        {
            res.status(400).send(err);
        } 
        else 
        {
            res.status(201).json({message:"Új rendezvény sikeresen felvéve"})
        }
    });
};
const rendezvenyek_Modositasa=(req,res)=>{
    const {Id,nev,hely_cim,eloadok,kezdo_d,veg_d,max_letszam,kep}=req.body;
    
    conn.query(`UPDATE rendezvenyek SET nev=?,hely_cim=?,eloadok=?,kezdo_d=?,veg_d=?,max_letszam=?,kep=? WHERE Id=?`
    ,[nev,hely_cim,eloadok,kezdo_d,veg_d,max_letszam,kep,Id]
    ,(err)=>{
        if(err){
            res.status(500).send(err);
        }
        else
        {
            res.status(200).json({message:"A rendezvény módosítása sikeres!"})
        }
    });
};


module.exports={
    rendezvenyek_Lista,
    rendezvenyek_Torles,
    rendezvenyek_Beszurasa,
    rendezvenyek_Modositasa
}