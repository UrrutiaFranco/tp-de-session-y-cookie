const { check } = require('express-validator');

module.exports = [
    
    check('name')
    .notEmpty()
    .withMessage('tenes que ingresa un nombre'),

    check('color')
    .notEmpty()
    .withMessage('nesecita un color'),

    check('email')
    .notEmpty()
    .withMessage('ingresa un email')
    .isEmail()
    .withMessage('Ingrese un email válido'),


] 