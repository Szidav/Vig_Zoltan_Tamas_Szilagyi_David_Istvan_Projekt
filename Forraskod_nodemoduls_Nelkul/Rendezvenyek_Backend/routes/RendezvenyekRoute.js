const express=require('express');
const router=express.Router();
const {rendezvenyek_Lista, rendezvenyek_Torles, rendezvenyek_Beszurasa, rendezvenyek_Modositasa}=require('../controllers/RendezvenyekController');

router.get('/',rendezvenyek_Lista);
router.delete('/Id/:Id',rendezvenyek_Torles);
router.post('/',rendezvenyek_Beszurasa);
router.patch('/',rendezvenyek_Modositasa);

module.exports=router;