/* 
    Rutas de Health / Health
    host + /health
*/
const { Router } = require('express');

const router = Router();

// Obtener eventos
router.get('/', (req, res) => {
    return res.status(200).json({
        ok: true,
        msg: `Servidor corriendo en puerto 4000`
    })
});


module.exports = router;