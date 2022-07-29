import { Router } from 'express';
const router = Router();

import { getCart, addCart, addCartById, deleteCart, deleteCartById } from '../controller/cart.js';

// Get cart by id
router.get('/:id', getCart);

// Add a cart
router.post('/', addCart);  

// Add a product to a cart
router.post('/:id/:productId', addCartById);

// Delete a cart
router.delete('/:id', deleteCart);

//delete a product from a cart
router.delete('/:id/:productId', deleteCartById);

export default router;