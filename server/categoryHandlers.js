// Parses JSON files
const fs = require("fs");
const items = JSON.parse(fs.readFileSync("data/items.json"));

// Error Handler
const { Error404 } = require("./ErrorHandler");

// GET a list of categories
const getCategories = async (req, res) => {
    // new Set is used to filter out duplicate entries in each item category
    const categorySet = new Set(items.map(item => item.category));

    try {
        // New Array to collect "category" in each product
        let categories = [];
        // forEach iterates through each item and pushes "category" to the array "categories"
        categorySet.forEach(category => {
            categories.push(category);
        });

        // Returns list of categories
        return await res.status(200).json({
            status: 200,
            message: "Successfully retrieved list of categories.",
            data: categories,
            resultsFound: categories.length,
        })

    }
    catch (err) { // Error Catcher
        console.log("getCategories Error:", err);
    }
};

// GET a list of products by category
const getProductsByCategory = async (req, res) => {
    const { categoryname } = req.params; // Category name here
    // Empty "spaces" are replaced by "-"
    const category = categoryname.split("-").join(" ");

    try {
        // New Array to collect items based on "category"
        let productsByCategory = [];
        // forEach iterates through each item
        // If "category" in an item matches with req.params, push item to the array "productsByCategory"
        items.forEach(item => {
            if (item.category.toLowerCase() === category.toLowerCase()) {
                productsByCategory.push(item);
            }
        })

        // If productsByCategory results in an empty array...
        if (productsByCategory.length === 0) {
            // Return the Error Message
            return res.status(404).json(Error404);
        }
        else { // Else, return array of products based on category
            return await res.status(200).json({
                status: 200,
                message: `Successfully retrieved list of products based on category '${categoryname}'`,
                data: productsByCategory,
                resultsFound: productsByCategory.length,
            })
        }
    }
    catch (err) { // Error Catcher
        console.log("getProductsByCategory Error:", err);
    }
};

// Module Exports
module.exports = { getCategories, getProductsByCategory };