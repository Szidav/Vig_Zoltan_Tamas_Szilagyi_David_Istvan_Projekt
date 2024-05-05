const express=require('express');
const router=express.Router();
const { user_Register }=require('../controllers/UserController');


router.post('/regisztracio',user_Register);


module.exports=router;