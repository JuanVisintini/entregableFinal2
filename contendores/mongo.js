import config from '../config.js';
import mongoose from 'mongoose';

await mongoose.connect(config.mongodb.connectionString);

class Mongo {
    constructor(collection, esquema) {
        this.collection = mongoose.model(collection, esquema);
    }

    async get(id) {
        try {
            if (id) {
                const doc = await this.collection.findById(id);
                return { id: doc._id, ...doc.toObject() };
            } else {
                console.log('No se ha pasado un id');
            }
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            const query = await this.collection.find();
            const tempDoc = query.map((doc) => {
                return { id: doc._id, ...doc.toObject() };
            }).sort((a, b) => {
                return a.timeStap - b.timeStap;
            }).reverse();
            return tempDoc;
        } catch (error) {
            console.log(error);
        }
    }

    async create(data) {
        try {
            const doc = await this.collection.create(data);
            return doc._id;
        } catch (error) {
            console.log(error);
        }
    }

    async update(id, data) {
        try {
            await this.collection.findByIdAndUpdate(id, data);
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id) {
        try {
            await this.collection.findByIdAndDelete(id);
        } catch (error) {
            console.log(error);
        }
    }
    
}

export default Mongo;