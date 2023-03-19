const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');
const formValidator = require('../validations/formValidator');

router.get("/", controller.index);
router.post("/", formValidator, controller.userForm);
router.get("/profile", controller.profile)
router.post("/profile" , controller.delete)


module.exports = router;