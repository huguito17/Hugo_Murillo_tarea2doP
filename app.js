import './loadEnv.js'
import express from 'express'
import router from './routes/routes.js'

const PORT = 11000
const app = express()

//Plantillas 
app.set('view engine', 'pug')
//Definir ubicacion de archivos publicos
app.use(express.static('public'))

//configuracion para procesar los formularios
app.use(express.urlencoded({extended: true}))
app.use(express.json())


//rutas
app.use('/', router)
app.listen(PORT, () => {
    console.log(`Usando el perto: ${PORT}`)
})