// Parses JSON files
const fs = require("fs");
const companies = JSON.parse(fs.readFileSync("data/companies.json"));
// Middleware/Backend Brand Handlers
// GET a list of Brands
const getBrands = async (req, res) => {
    try {
        // Returns entire JSON file "companies.json" as array
        return await res.status(200).json({
            status: 200,
            message: "Successfully retrieved list of companies",
            data: companies,
        })
    }
    catch (err) {
        console.log("getBrands Error:", err);
    }
};

// GET a list of products by Brand
const getProductsByBrand = async (req, res) => {};

// Module Exports
module.exports = { getBrands, getProductsByBrand };