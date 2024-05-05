const mysql=require('mysql');
const conn=mysql.createConnection({
    user:"admin",
    password:"rendezveny123",
    database:"rendezvenyek"
});

const kosarak_Lista=(req,res)=>{
    conn.query("SELECT * FROM kosarak",(err,rows)=>{
        if(err)
        {
            res.status(400).json(err)
        }
        else {
            res.status(200).json(rows);
        }
    });
};

const kosarak_Torles=(req,res)=>{
    conn.query(`DELETE FROM kosarak WHERE VSO_Id=? AND JGY_Id=?`
    ,[req.params.VSO_Id,req.params.JGY_Id]
    ,(err)=>{
        if(err)
        {
            res.status(400).json(err);
        }
        else
        {
            res.status(200).json({message:"Kosár sikeresen törölve"});
        }
    });
};

const kosarak_Beszurasa=(req,res)=>{
    const {VSO_Id,JGY_Id,db}=req.body;

    conn.query(`INSERT INTO kosarak (VSO_Id, JGY_Id, db) VALUES (?,?,?)`
    ,[VSO_Id,JGY_Id,db]
    ,(err)=>{
        if(err)
        {
            res.status(400).send(err);
        }
        else 
        {
            res.status(201).json({message:"Új kosár beillesztve!"})
        }
    });
};

module.exports={
    kosarak_Lista,
    kosarak_Torles,
    kosarak_Beszurasa
}