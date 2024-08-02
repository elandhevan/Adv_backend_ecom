const express = require('express');
const Router = express.Router();
const productController = require("../controllers/productController");
const auth = require("../middleware/auth");

Router.get("/products",auth,productController.getAllProducts);
Router.post("/products",productController.postAllProducts)
Router.put('/products/:id',productController.updateAllProducts);
Router.delete('/products/:id', productController.deleteProduct);



module.exports = Router;