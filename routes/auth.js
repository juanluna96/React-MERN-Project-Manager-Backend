const router = require('express').Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

// Iniciar sesion
// api/auth
router.post('/',
    /*[
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'El password debe tener mínimo de 6 caracteres').isLength({ min: 6 })
    ],*/
    authController.autenticarUsuario
);

// Obtiene el usuario autenticado
router.get("/", auth, authController.usuarioAutenticado);


module.exports = router;