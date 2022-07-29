import contedorFireBase from '../../contendores/firebase.js';

class carritoDaoFirebase extends contedorFireBase {
    constructor(collection){
        super(collection);
    }

    async getAll() {
        try{
            const query = await this.collection.get();        
            const tempDoc = query.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
            return tempDoc
        }
        catch(error){
            console.log(error);
        }
    }

    async get(id) {
        try{
            if(id) {
            const doc = await this.collection.doc(id).get();
            return { id: doc.id, ...doc.data() }
            }
            else{
                console.log('No se ha pasado un id');
            }
        }
        catch(error){
            console.log(error);
        }
    }

    async create(data) {
        try{
            const doc = await this.collection.add(data);
            return doc.id;
        }
        catch(error){
            console.log(error);
        }
    }

    async update(id, data) {
        try{
            await this.collection.doc(id).update(data);
        }
        catch(error){
            console.log(error);
        }
    }
    
}

const carritoFirebase = new carritoDaoFirebase('carritos');

export default carritoFirebase;