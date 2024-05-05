const express=require('express');
const router=express.Router();
const {kosarak_Lista, kosarak_Torles, kosarak_Beszurasa}=require('../controllers/KosarakController');

router.get('/',kosarak_Lista);
router.delete('/:VSO_Id/:JGY_Id',kosarak_Torles);
router.post('/',kosarak_Beszurasa);

module.exports=router;