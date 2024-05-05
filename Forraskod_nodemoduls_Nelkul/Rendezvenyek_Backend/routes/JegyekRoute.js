const express=require('express');
const router=express.Router();
const {jegyek_Lista,jegyek_Torlese, jegyek_Felvetele, jegyek_Modositasa}=require('../controllers/JegyekController');

router.get('/',jegyek_Lista);
router.delete('/Id/:Id',jegyek_Torlese);
router.post('/',jegyek_Felvetele);
router.patch('/',jegyek_Modositasa);

module.exports=router;