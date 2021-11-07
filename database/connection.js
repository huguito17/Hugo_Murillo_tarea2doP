import mysql from 'mysql2'

const cnn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

cnn.connect(err => {
    err ? console.log(`${err}`) : console.log(`Base de datos: ${process.env.DB_DATABASE}`)
})

export default cnn