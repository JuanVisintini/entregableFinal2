import { CarritoDao as cart } from "../daos/daos.js";
import { ProductoDao as products } from '../daos/daos.js';

const addCart = async (req, res) => {
    try {
        const newCart = {  timeStamp: new Date(), productos: [] };
        const id = await cart.create(newCart);
        res.json(id);
    }
    catch (error) {
        console.log(error);
    }
}

//agregar un producto a un carrito
const addCartById = async (req, res) => {
    try {
        const carts = await cart.get(req.params.id);
        const product = await products.get(req.params.productId);
        carts.productos.push(product);
        await cart.update(req.params.id, carts);
        res.json({ message: 'Producto agregado' });
    }
    catch (error) {
        console.log(error);
    }
}

const getCart = async (req, res) => {
    try {
        const carts = await cart.get(req.params.id);
        res.json(carts);
    }
    catch (error) {
        console.log(error);
    }
}

const deleteCart = async (req, res) => {
    try {
        await cart.delete(req.params.id);
        res.json({ message: 'Carrito eliminado' });
    }
    catch (error) {
        console.log(error);
    }
}

//elememinar un producto de un carrito
const deleteCartById = async (req, res) => {
    try {
        const carts = await cart.get(req.params.id);
        console.log(carts)
        const product = await products.get(req.params.productId);
        console.log(product)
        carts.productos.splice(carts.productos.indexOf(product), 1);
        await cart.update(req.params.id, carts);
        res.json({ message: 'Producto eliminado' });
    }
    catch (error) {
        console.log(error);
    }
}

export { addCart, addCartById ,getCart, deleteCart, deleteCartById };