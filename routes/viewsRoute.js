const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.home)
router.get('/me', viewsController.aboutMe);



module.exports = router;