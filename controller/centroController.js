const Centro = require('../Models/cdslp');
exports.CrearCentro = async(req, res)=>{
    console.log('Centro a crear centro')
    try{
        let centro;
        centro = new Centro(req.body);
        await centro.save();
        console.log(centro);
        msg="Centro dado de alta"
    }
    catch(error){
        console.log(error);
        res.status(500).send('Hay un error en crear centro')
    }
}

exports.ObtenerCentro = async(req, res)=>{
    console.log('Hemos entrado a la ruta')
    try{
        const centro = await Centro.find();
        res.json(centro);
    }
    catch(error){
        console.log(500).send('Hay un error en obtener centro')
    }
}