const express=require('express');
const router=express.Router();
const {kedvezmeny_Tipusok_Lista, kedvezmeny_Tipus_Torles,kedvezmeny_Tipus_Felvetele, kedvezmeny_Tipus_Modositasa}=require('../controllers/KedvezmenyTipusok_Controller');

router.get('/',kedvezmeny_Tipusok_Lista);
router.delete('/Id/:Id',kedvezmeny_Tipus_Torles);
router.post('/',kedvezmeny_Tipus_Felvetele);
router.patch('/',kedvezmeny_Tipus_Modositasa);

module.exports=router;