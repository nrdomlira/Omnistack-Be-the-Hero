const express = require('express');

const ONGController = require('../controllers/ONGController');
const IncidentController = require('../controllers/IncidentController');
const ProfileController = require('../controllers/ProfileController');
const SessionController = require('../controllers/SessionController');

const router = express.Router();

router.post('/sessions', SessionController.store);


router.get('/ong', ONGController.index);
router.post('/ong', ONGController.store);

router.get('/incidents', IncidentController.index);
router.post('/incidents', IncidentController.store);
router.delete('/incidents/:id', IncidentController.delete);

router.get('/profile', ProfileController.index);

module.exports = router;