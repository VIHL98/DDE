const express = require('express');
const conectarDB = require('./config/db');
const app = express();

console.log("Desde index")
app.get('/', (req,res)=>{
    res.send('Hola mundo')
})

app.listen(4000,()=>{
    
    console.log('El servidor esta corriendo en el puerto 4000')

})

conectarDB();
app.use(express.json());
app.use('/api/centros', require('./rutas/Centro'));
/*app.use('/api/centros', require('./rutas/Centro'));*/