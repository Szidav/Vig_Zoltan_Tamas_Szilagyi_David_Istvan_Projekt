const express=require('express');
const router=express.Router();
const {ertekesitesek_Lista, ertekesitesek_Torles, ertekesites_Felvetele}=require('../controllers/ErtekesitesekController');

router.get('/',ertekesitesek_Lista);
router.delete('/:VSO_Id/:JGY_Id/:datum',ertekesitesek_Torles);
router.post('/',ertekesites_Felvetele);

module.exports=router;