const express = require('express');
const router = express.Router();
const { kedvezmenyek_Lista, kedvezmenyek_Torles, kedvezmenyek_Felvetele, kedvezmenyek_Modositasa } = require('../controllers/KedvezmenyekController');

router.get('/', kedvezmenyek_Lista);
router.delete('/:RDY_Id/:JGY_Id/:KTS_Id', kedvezmenyek_Torles);
router.post('/', kedvezmenyek_Felvetele);

module.exports = router;
