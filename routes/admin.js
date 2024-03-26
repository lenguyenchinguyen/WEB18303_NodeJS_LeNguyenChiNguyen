const express = require('express');
const ProductController = require("../controllers/admin/ProductController");
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: './public/images/' });

router.get('/products', ProductController.getAddProducts);

router.post('/addnew', upload.single('image'), ProductController.postAddProduct);

module.exports = router;