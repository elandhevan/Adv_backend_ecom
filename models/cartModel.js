const mongoose = require("mongoose");

const cart = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    products: [
        {
            product_id: String,
            quantity: String,
        },
    ],
});

const Cart = mongoose.model('carts', cart);
module.exports = Cart;