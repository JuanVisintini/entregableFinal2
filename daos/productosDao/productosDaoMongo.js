import Mongo from '../../contendores/mongo.js';

class productosDaoMongo extends Mongo {
    constructor(collection) {
        super(collection, {
            title: { type: String, required: true },
            price: { type: Number, required: true },
            thumbnail: { type: String, required: true },
            stock: { type: Number, required: true },
            code: { type: String, required: true },
        });
    }
}

const productosMongo = new productosDaoMongo('productos');

export default productosMongo;