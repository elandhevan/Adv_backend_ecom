const Product = require("../models/productModel")
// import { v4 as uuidv4 } from 'uuid';

const {v4:uuidv4} = require('uuid')

const getAllProducts = async(req,res)=>{
    try{
    const products = await Product.find();
    res.json(products);
    console.log(products);
    }
    catch(err){
        console.error(err)
    }
    
};

const postAllProducts = async (req, res) => {
    const { id, title, description, category, image, price, rating } = req.body;
    try {
        const product = await Product.create({ id:uuidv4(), title, description, category, image, price, rating });
        res.status(200)
        res.send(product);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
};

const updateAllProducts = async (req, res) => {
    const { id, title, description, category, image, price, rating } = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { id, title, description, category, image, price, rating },
            { new: true, runValidators: true }
        );
        if (!updatedProduct) {
            return res.status(404).send("Product not found");
        }
        res.status(200).send(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
};

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).send("Product not found");
        }
        res.status(200).send("Product deleted successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
};

module.exports = { getAllProducts, postAllProducts, updateAllProducts, deleteProduct };