var mongoose = require('mongoose');

var cadenaConexion = 'mongodb+srv://adri:adriPassword@cluster0.h7e6a.mongodb.net/BDProductos'

var aux = 'mongodb://localhost/Personas'

mongoose.connect( cadenaConexion , {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }, (err, res) => {
        if(err){
            console.log('error al conectarte a la bd')
        }
        else{
            console.log('bd conectada');
        }
    }
);

var ProductoSchema = new mongoose.Schema({
    _id:{
        type: String,
    },
    nombre: {
        type: String,
    },
    cantidad: {
        type: Number,
    },
    precio: {
        type: Number,
    },
    vencimiento: {
        type: Date,
    },
    ven: {
        type: String,
    }
}, {collection: 'Productos'});

var Productos = mongoose.model('Productos', ProductoSchema);

class ProductoController {

    getAll(request, response){
        Productos.aggregate([
            {
                $project: {
                    _id:1, nombre: 1, cantidad:1, precio:1,
                    ven: {$dateToString: {format: "%d-%m-%Y", date:"$vencimiento"}}
                }
            }
        ]).then(res => {
            response.json(res);
        }).catch(err => {
            response.end('ocurrio un error');
        })
    }
}

module.exports = new ProductoController();