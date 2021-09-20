// Parses JSON files
const fs = require("fs");
const companies = JSON.parse(fs.readFileSync("data/companies.json"));
const items = JSON.parse(fs.readFileSync("data/items.json"));

// Error Handler
const { Error404 } = require("./ErrorHandler");

// GET a list of all brands
const getBrands = async (req, res) => {
    try {
        // Returns entire JSON file "companies.json" as array
        return await res.status(200).json({
            status: 200,
            message: "Successfully retrieved list of companies",
            data: companies,
        })
    }
    catch (err) { // Error Catcher
        console.log("getBrands Error:", err);
    }
};

// GET a list of products by brand name
const getProductsByBrand = async (req, res) => {
    const { _id } = req.params; // Company ID Here

    try {
        // New Variable to Filter Company
        let company;
        // forEach iterates through each company
        // If _id in company matches with req.params, push company to the variable "company"
        companies.forEach((co) => {
            if (co._id == _id) {
                company = co;
            }
        })

        // New Array to Filter Products By Company ID
        let productsOfBrand = [];
        // forEach iterates through each item.
        // If companyId in product matches with req.params, push product to new Array.
        items.forEach((product) => {
            if (product.companyId == _id) {
                productsOfBrand.push(product);
            }
        })

        // If productsOfBrand results in an empty array...
        if (productsOfBrand.length === 0) {
            // Return the Error Message
            return res.status(404).json(Error404)
        }
        else { // Else, return company information and list of products sold under this brand
            
            return await res.status(200).json({
                status: 200,
                message: `Successfully retrieved list of products from ${company.name}, Company ID# ${_id}.`,
                store: company,
                data: productsOfBrand,
            })
        }
    }
    catch (err) {
        console.log("getProductsByBrandName Error:", err);
    }
};

// Module Exports
module.exports = { getBrands, getProductsByBrand };