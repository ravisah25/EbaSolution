const router = require('express').Router();
const UserRegistration = require('../controller/registercontroller')

router.post('/user/register/', UserRegistration.register);

router.delete('/user/:id', UserRegistration.registerDelete);

router.get('/user/:id', UserRegistration.registerData);

router.put('/user/register', UserRegistration.registerUpdate);

router.post('/user/salary', UserRegistration.salaryInsert);

router.get('/salary/:id', UserRegistration.salaryData);



module.exports = router 