// Parses JSON files
const fs = require("fs");
const items = JSON.parse(fs.readFileSync("data/items.json"));

// Error Handler
const { Error404 } = require("./ErrorHandler");

// GET a list of all products
const getProducts = async (req, res) => {
    try {
        // Returns entire JSON file "items.json" as array
        return await res.status(200).json({
            status: 200,
            message: "Successfully retrieved list of items",
            data: items,
            resultsFound: items.length,
        });
    }
    catch (err) { // Error Catcher
        console.log("getProducts Error:", err);
    }
};

// GET a product by product ID
const getProductById = async (req, res) => {
    const { _id } = req.params; // Product ID Here

    try {
        // New Variable to Filter Product
        let product;
        // forEach iterates through each product
        // If product _id matches req.params, assign product to the variable "product"
        items.forEach(item => {
            if (item._id == _id) {
                product = item;
            }
        });

        // If product is undefined...
        // Return an error message
        if (product === undefined) {
            return res.status(404).json(Error404);
        }
        else { // Else, return product information
            return await res.status(200).json({
                status: 200,
                message: `Successfully retrieved Product # ${_id}.`,
                data: product,
            })
        }
    }
    catch (err) { // Error Catcher
        console.log("getProductById Error:", err);
    }
};

// PATCH/UPDATE
const updateProductPurchase = async (req, res) => {
    const { _id } = req.params; // Product ID Here

    try {
        // New Variable to Filter Product
        let product;
        // forEach iterates through each product
        // If product _id matches req.params, assign product to the variable "product"
        items.forEach(item => {
            if (item._id == _id) {
                product = item;
            }
        });

        // Return an error message if no such product is found.
        if (product === undefined) {
            return res.status(404).json(Error404);
        }
        // Return error if product has no quantity in stock
        else if (product.numInStock === 0) {
            return res.status(400).json({
                status: 400,
                message: "Sorry! This product is sold out. Please check again later.",
                data: product,
            })
        }
        else { // Decrement quantity in stock and confirm purchase of item.
            product.numInStock--;
            return res.status(200).json({
                status: 204,
                message: `Thank you for purchasing ${product.name}. Your order is now processing.`,
                data: product,
            })
        }
    }
    catch (err) {
        console.log("updateProductPurchase Error:", err);
    }
};

// Module Exports
module.exports = { getProducts, getProductById, updateProductPurchase };