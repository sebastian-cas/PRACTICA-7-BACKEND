console.log('Hola mundo con Node JS')

const express = require('express')
const app = express()
const port = 3000

// ---------------- Endpoint -------------------
// con 'get' le indicamos que nuestra API acepta
// el method GET.
// El primer parametro establece el path (ruta) del
// codigo que queremos ejecutar
// El segundo parametro establece el codigo a ejecutar
// en forma de callback
// - el callback recibe 2 parametros:
// - req: request o la peticion
// - res: response o la respuesta
app.get('/', (req, res) => {
    res.send('Hola mundo!')
})

// Le indicamos a nuesta API que empiece a escuchar peticiones
// en el puerto 3000 y cuando se encienda nos muestre el mensaje
// que hay en el console.log
app.listen(port, () => {
    console.log(`La API esta escuchando en el puerto ${port}`)
})