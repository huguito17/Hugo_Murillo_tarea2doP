import express from 'express'
import { category, product, mproduct, productId, productUp, mcategory, productDl, categoryDl, categoryUp, categoryId} from '../controllers/authController.js'

const router = express.Router()

//rutas inicio
router.get('/', (req, res) => {
    res.render('index')
})

//mostrar
router.get('/product', mproduct)
router.get('/category', mcategory)

//mover el ID
router.get('/product/:idp', productId)
router.get('/category/:idc', categoryId)

//eliminar
router.get('/product/delete/:idp', productDl)
router.get('/category/delete/:idc', categoryDl)

//Ingresar
router.post('/category', category)
router.post('/product', product)

//editar
router.post('/product/:idp', productUp)
router.post('/category/:idc', categoryUp)



export default router