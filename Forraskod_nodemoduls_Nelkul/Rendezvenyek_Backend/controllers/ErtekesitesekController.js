const mysql=require('mysql');
const conn =mysql.createConnection({
    user:"admin",
    password:"rendezveny123",
    database:"rendezvenyek"
});

const ertekesitesek_Lista=(req,res)=>{
    conn.query("SELECT * FROM ertekesitesek",(err,rows)=>{
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


const ertekesitesek_Torles = (req,res)=>{
    const {VSO_Id,JGY_Id,datum} = req.params;
    conn.query(`DELETE FROM ertekesitesek WHERE VSO_Id=?, JGY_Id=?, datum=?`
   ,[VSO_Id,JGY_Id,datum],(err,result)=>{
    if(err)
    {
        res.status(400).json(err);
    }
    else
    { 
        res.status(200).json({message: "Értékesítés sikeresen törölve!"});
    }
   });
};


const ertekesites_Felvetele=(req,res)=>{
    const  {VSO_Id,JGY_Id,datum,sorozatszam} = req.body;

    conn.query(`INSERT INTO ertekesitesek (VSO_Id, JGY_Id, datum, sorozatszam) VALUES (?,?,?,?)`
    ,[VSO_Id,JGY_Id,datum,sorozatszam]
    ,(err) => {
        if (err) 
        {
            res.status(400).json(err);
        } 
        else 
        {
            res.status(201).json({message: "Az értékesítés sikeresen mentve!"});
        }
    });
};

module.exports={
    ertekesitesek_Lista,
    ertekesitesek_Torles,
    ertekesites_Felvetele
}