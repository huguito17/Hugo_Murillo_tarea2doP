import con from '../database/connection.js'
let tabla = ''

//Ingresar categoria
export const category = async (req, res) => {
    const {nombreCat, descripcion} = req.body

    const data = {
        nombreCat: nombreCat,
        descripcion: descripcion
    }
    con.query('INSERT INTO categoria SET ?', data, (err, result) => {
        if (err) {
            console.log('Ocurrio un error al insertar la categoria')
            return
        }
        res.redirect('/category')
    })
}

//Mostrar categorias
export const mcategory =  (req, res) => {
    tabla = 'SELECT * FROM categoria'
    con.query(tabla, (err, results) => {
        if (err) return res.send("Error")
        res.render('category', {"categorias": results})
    })
    
}

//Categoria id
export const categoryId =  (req, res) => {
    tabla = 'SELECT id, nombreCat, descripcion FROM categoria WHERE id = ?'
    con.query(tabla,[req.params.idc], (err, rID) => {
        if (err) return res.send("Error")

        tabla = 'SELECT id, nombreCat, descripcion  FROM categoria'
        con.query(tabla, (err, results) => {
        if (err) return res.send("Error")
        res.render('category', {"categoria":rID, "categorias": results})
        })
    })
}
//editar categoria
export const categoryUp = (req, res) => {
    const {nombreCat, descripcion} = req.body

    tabla = 'UPDATE categoria SET nombreCat = ?, descripcion= ? WHERE id = ?'
    con.query(tabla, [nombreCat,descripcion,req.params.idc], err => {
        if (err){
            console.log('Ocurrio un error al editar la categoria')
            return
        }
        res.redirect('/category')
    })
}

//eliminar categoria
export const categoryDl = (req, res) => {
    tabla = 'DELETE FROM categoria WHERE id = ?'
    con.query(tabla, [req.params.idc], (err) => {
        if (err){
            console.log('Ocurrio un error al borrar la categoria')
            return
        }
        res.redirect('/category')
    })
}

//Ingresar productos
export const product = async (req, res) => {
    const {nombrePro, precioActual, stock, id} = req.body

    const data = {
        nombrePro: nombrePro,
        precioActual: precioActual,
        stock: stock,
        id:id
    }
    con.query('INSERT INTO productos SET ?', data, (err, result) => {
        if (err) {
            console.log('Ocurrio un error al insertar el producto')
            return
        }
        res.redirect('/product')
    })
}

//Mostrar en productos
export const mproduct =  (req, res) => {
    tabla = 'SELECT P.codigoPro as IDP, P.nombrePro as NP, P.precioActual, P.stock, C.id as IDC, C.nombreCat as NC FROM productos P INNER JOIN categoria c ON P.id = C.id'
    con.query(tabla, (err, results) => {
        if (err) return res.send("Error")

        tabla = 'SELECT * FROM categoria'
        con.query(tabla, (err, r) => {
        if (err) return res.send("Error")
        res.render('product', {"productos": results,"categorias": r})
        })
    })
}

//PRODUCTOS Id
export const productId =  (req, res) => {
    tabla = 'SELECT P.codigoPro as IDP, P.nombrePro as NP, P.precioActual, P.stock, C.id as IDC, C.nombreCat as NC FROM productos P INNER JOIN categoria c ON P.id = C.id WHERE P.codigoPro = ?'
    con.query(tabla,[req.params.idp], (err, rID) => {
        if (err) return res.send("Error")
        
        tabla = 'SELECT P.codigoPro as IDP, P.nombrePro as NP, P.precioActual, P.stock, C.id as IDC, C.nombreCat as NC FROM productos P INNER JOIN categoria c ON P.id = C.id'
        con.query(tabla, (err, results) => {
        
            if (err) return res.send("Error")
            tabla = 'SELECT * FROM categoria'
            con.query(tabla, (err, r) => {
                if (err) return res.send("Error")
                res.render('product', {"producto":rID, "productos": results, "categorias": r})
            })
        })
    })
}

//Editar producto
export const productUp = (req, res) => {
    const {nombrePro, precioActual, stock, id} = req.body
    tabla = 'UPDATE productos SET nombrePro = ?, precioActual = ?, stock=?, id= ? WHERE codigoPro = ?'
    con.query(tabla, [nombrePro, precioActual, stock, id, req.params.idp], err => {
        if (err){
            console.log('Ocurrio un error al actualizar el producto')
            return
        }
        res.redirect('/product')
    })
}

//Eliminar producto
export const productDl = (req, res) => {
    tabla = 'DELETE FROM productos WHERE codigoPro = ?'
    con.query(tabla, [req.params.idp], (err) => {
        if (err){
            console.log('Ocurrio un error al borrar el producto')
            return
        }
        res.redirect('/product')
    })
}
