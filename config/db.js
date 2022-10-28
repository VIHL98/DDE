const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'});
 
const conectarDB = async ()=>{
    try{
        await mongoose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true, 
 
            useUnifiedTopology: true 
            
        })
        console.log('BD CONECTADA')
    }
    catch{
        console.log(error);
        process.exit(1);//Detenemos la app
    }
}
module.exports = conectarDB;