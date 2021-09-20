// Parses JSON files
const fs = require("fs");
const items = JSON.parse(fs.readFileSync("data/items.json"));

// Middleware/Backend Product Handlers
// GET a list of all products
const getProducts = async (req, res) => {
    try {
        // Returns entire JSON file "items.json" as array
        return await res.status(200).json({
            status: 200,
            message: "Successfully retrieved list of items",
            data: items,
        })
    }
    catch (err) {
        console.log("getProducts Error:", err);
    }
};

// GET a product by product ID
const getProductById = async (req, res) => {};

// PATCH/UPDATE
const updateProduct = async (req, res) => {};

// Module Exports
module.exports = { getProducts, getProductById, updateProduct };