import { Router } from 'express';
const router = Router();

import { getProducts, getProduct, addProduct, updateProduct, deleteProduct } from '../controller/product.js';


// Get all products
router.get('/', getProducts);

// Get a product by id
router.get('/:id', getProduct);

// Add a product
router.post('/', addProduct);

// Update a product
router.put('/:id', updateProduct);

// Delete a product
router.delete('/:id', deleteProduct);

export default router;