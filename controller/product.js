import { ProductoDao as products } from '../daos/daos.js';

const getProducts = async (req, res) => {
    try{
        const productos = await products.getAll();
        res.json(productos);
        
    }
    catch(error){
        console.log(error);
    }
    
}

const getProduct = async (req, res) => {
    try{
        const product = await products.get(req.params.id);
        res.json(product);
    }
    catch(error){
        console.log(error);
    }
}

const addProduct = async (req, res) => {
    try{
        const id = await products.create(req.body);
        res.json(id);
    }
    catch(error){
        console.log(error);
    }
}

const updateProduct = async (req, res) => {
    try{
        await products.update(req.params.id, req.body);
        res.json({ message: 'Producto actualizado' });
    }
    catch(error){
        console.log(error);
    }
}

const deleteProduct = async (req, res) => {
    try{
        await products.delete(req.params.id);
        res.json({ message: 'Producto eliminado' });
    }
    catch(error){
        console.log(error);
    }
}

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };