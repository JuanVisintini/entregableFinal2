import admin from 'firebase-admin';
import  firebase  from '../config.js';

import  serviceAccount  from '../entregan2-firebase-adminsdk-rtkok-fd77d4c7c6.json' assert { type: "json"};

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

class Firebase {
    constructor(collection) {
        this.collection = db.collection(collection);
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

    async delete(id) {
        try{
            await this.collection.doc(id).delete();
        }
        catch(error){
            console.log(error);
        }
    }   
}

export default Firebase;
