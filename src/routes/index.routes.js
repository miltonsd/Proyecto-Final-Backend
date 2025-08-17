const Router = require('express');
const router = Router();
const { validarReservas, authMiddleware, rolesMiddleware } = require('../validators/middleware');

const apiUsuarioRouter = require('./api/usuario.routes');
router.use('/usuarios', apiUsuarioRouter);

const apiCategoriaRouter = require('./api/categoria.routes');
router.use('/categorias', authMiddleware, rolesMiddleware([1]), apiCategoriaRouter);

const apiRolRouter = require('./api/rol.routes');
router.use('/roles', authMiddleware, rolesMiddleware([1]), apiRolRouter);

const apiMenuRouter = require('./api/menu.routes');
router.use('/menus', authMiddleware, apiMenuRouter);

const apiMesaRouter = require('./api/mesa.routes');
router.use('/mesas', authMiddleware, apiMesaRouter);

const apiPedidoRouter = require('./api/pedido.routes');
router.use('/pedidos', authMiddleware, apiPedidoRouter);

const apiProductoRouter = require('./api/producto.routes');
router.use('/productos', apiProductoRouter);

const apiPromocionRouter = require('./api/promocion.routes');
router.use('/promociones', apiPromocionRouter);

const apiReservaRouter = require('./api/reserva.routes');
router.use('/reservas', authMiddleware, validarReservas, apiReservaRouter);

const apiResumenDiarioUsuarioRouter = require('./api/resumenDiarioUsuario.routes');
router.use('/resumenes', authMiddleware, apiResumenDiarioUsuarioRouter);

const apiTipoProductoRouter = require('./api/tipoProducto.routes');
router.use('/tiposProducto', apiTipoProductoRouter); 

module.exports = router;