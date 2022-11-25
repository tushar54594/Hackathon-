const {patientRegister, getPatient}  = require('../controllers/patientController');

var router = require('express').Router();

router.post('/registerpatient', patientRegister);
router.get('/getpatient', getPatient);

module.exports = router;

