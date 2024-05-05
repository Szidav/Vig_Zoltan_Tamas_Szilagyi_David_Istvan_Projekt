const mysql = require('mysql');
const conn = mysql.createConnection({
    user:"admin",
    password:"rendezveny123",
    database: "rendezvenyek"
});
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const s_key = 'kulcs';
const salt = 10;

const user_Register = (req,res)=>{
    const{v_nev,k_nev,e_mail,felh_nev,jelszo,allapot,utolso_bel,szul_datum,telefonszam,adoszam} = req.body
    console.log(v_nev,k_nev,e_mail,felh_nev,jelszo,allapot,utolso_bel,szul_datum,telefonszam,adoszam)
    bcrypt.hash(jelszo,salt,function(err,hashedPassword){
        if(err){
            res.status(500).send(err);
        }
        else
        {
            conn.query(`INSERT INTO vasarlok(v_nev, k_nev, e_mail, felh_nev, jelszo, allapot, utolso_bel, szul_datum, telefonszam, adoszam) VALUES (?,?,?,?,?,?,?,?,?,?);`,
            [v_nev,k_nev,e_mail,felh_nev,hashedPassword,allapot,utolso_bel,szul_datum,telefonszam,adoszam],
            (err)=>{
                if(err){
                    res.status(500).send(err);
                }
                else
                {
                    res.status(201).json("Új felhasználó felvéve!");
                }
            })
        }
    });
};

//Ezt majd megoldjuk valahogy!!!

const user_Login=(async(req,res)=>{
    const {felh_nev,jelszo}=req.body;
    conn.query(`SELECT jelszo FROM vasarlok WHERE felh_nev=?`,[felh_nev],async(err,results)=>{
        const user=results[0];

    });
});

module.exports={
    user_Register
}
