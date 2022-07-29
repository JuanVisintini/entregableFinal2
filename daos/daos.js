import dotenv from 'dotenv';
dotenv.config();

let ProductoDao;
let CarritoDao;

switch (process.env.DB) {
    case 'firebase':
        const { default: productosFireBase } = await import('../daos/productosDao/productosDaoFirebase.js');
        const { default: CarritoFirebase } = await import('../daos/carritosDao/carritosDaoFirebase.js');

        ProductoDao = productosFireBase;
        CarritoDao = CarritoFirebase;

        break;

    
    case 'mongo':
        const { default : ProductoDaoMongo } = await import('../daos/productosDao/productosDaoMongo.js');
        const { default : CarritoDaoMongo } = await import('../daos/carritosDao/CarritosDaoMongo.js');

        ProductoDao = ProductoDaoMongo;
        CarritoDao = CarritoDaoMongo;

        break;

    default:
        console.log('No se ha especificado una configuración de entorno');
    break;
}

export {ProductoDao, CarritoDao};