import { Router } from "express";
const router = Router();

import products from './products.js'
import cart from './cart.js'

router.use('/products', products);
router.use('/cart', cart);

export default router;