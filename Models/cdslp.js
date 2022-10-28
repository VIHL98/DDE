const mongoose = require('mongoose');

const CentroSchema = mongoose.Schema({
    Nombre:{
        type:String,
        required:true
    },
    Correo:{
        type:String,
        required:true
    },
    Numero_telefonico:{
        type:String,
        required:true
    },
    Sitio_Web:{
        type:String,
        required:true
    },
    Latitud:{
        type:String,
        required:true
    },
    Longitud:{
        type:String,
        required:true
    }
})

module.exports= mongoose.Schema('Centro',CentroSchema)