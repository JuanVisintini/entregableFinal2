import contenedorFirebase from '../../contendores/firebase.js';

class productosDaoFirebase extends contenedorFirebase {
    constructor(collection){
        super(collection);
    }
}

const productosFireBase = new productosDaoFirebase('productos');

export default productosFireBase;