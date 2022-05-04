const express =  require('express')
const routesProductsFS = express.Router()
const routesCartFS = express.Router()

const productsControllers = require('../controllers/products/productsControllerFS')
const cartsControllers = require('../controllers/cart/cartControllerFS')

const admin = require('../middleware/admin')
const adminRol = true

//RUTAS PRODUCTOS
routesProductsFS.get('/', productsControllers.getAllProducts)
routesProductsFS.get('/:id', productsControllers.getProductById)
routesProductsFS.post('/', admin(adminRol), productsControllers.addProduct)
routesProductsFS.put('/:id', admin(adminRol), productsControllers.updateProduct)
routesProductsFS.delete('/:id', admin(adminRol), productsControllers.deleteProduct)

//RUTAS CARRITOS
routesCartFS.post('/', cartsControllers.addCart)
routesCartFS.delete('/:id', cartsControllers.deleteCart)
routesCartFS.get('/:id/products', cartsControllers.productsinCart)
routesCartFS.post('/:id/products', cartsControllers.addProductInCart)
routesCartFS.delete('/:idcart/products/:idprod', cartsControllers.deleteProductInCart)


module.exports = { routesProductsFS, routesCartFS }

