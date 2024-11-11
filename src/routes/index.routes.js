const Router = require('express');
const router = Router();
const { validarReservas } = require('../validators/middleware');

const apiUsuarioRouter = require('./api/usuario.routes');
router.use('/usuarios', apiUsuarioRouter);

const apiCategoriaRouter = require('./api/categoria.routes');
router.use('/categorias', apiCategoriaRouter);

const apiRolRouter = require('./api/rol.routes');
router.use('/roles', apiRolRouter);

const apiMenuRouter = require('./api/menu.routes');
router.use('/menues', apiMenuRouter);

const apiMesaRouter = require('./api/mesa.routes');
router.use('/mesas', apiMesaRouter);

const apiPedidoRouter = require('./api/pedido.routes');
router.use('/pedidos', apiPedidoRouter);

const apiProductoRouter = require('./api/producto.routes');
router.use('/productos', apiProductoRouter);

const apiPromocionRouter = require('./api/promocion.routes');
router.use('/promociones', apiPromocionRouter);

const apiReservaRouter = require('./api/reserva.routes');
router.use('/reservas', validarReservas, apiReservaRouter);

const apiResumenDiarioUsuarioRouter = require('./api/resumenDiarioUsuario.routes');
router.use('/resumenes', apiResumenDiarioUsuarioRouter);

const apiTipoProductoRouter = require('./api/tipoProducto.routes');
router.use('/tiposProducto', apiTipoProductoRouter); 

module.exports = router;