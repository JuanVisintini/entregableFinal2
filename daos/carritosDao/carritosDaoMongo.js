import Mongo from '../../contendores/mongo.js';

class carritosDaoMongo extends Mongo {
    constructor(collection) {
        super(collection, {
            productos: { type: Array, required: true },
            timestamp: { type: String },
        });
    }

}

const carritosMongo = new carritosDaoMongo('carritos');

export default carritosMongo;