// Parses JSON files
const fs = require("fs");
const items = JSON.parse(fs.readFileSync("data/items.json"));

// GET all products sorted alphabetically (A-Z);
const getSortedProducts = async (req, res) => {
    const { sortOrder } = req.params;
    // "a-z" or "z-a" or "low-high" or "high-low"
    let sortedProducts;

    // Sorting Algorithm by Item Name
    const sortAlpha = (arr) => {
        // localeCompare sort method // will only work for strings
        arr.sort((a, b) => a.name.localeCompare(b.name));
        return arr;
    }

    // Sorting Algorithm by Price
    const sortPrice = (arr) => {
        // Traditional sort method, will work with both numbers and strings
        arr.sort((a, b) => a.price.split(" ")[0].slice(1,).split(",").join("") - 
        b.price.split(" ")[0].slice(1,).split(",").join(""));
        return arr;
    }

    console.log(sortOrder, ' this is sort order')
    try {
        // Forward Alphabet Sorting A-Z
        if (sortOrder.toLowerCase() === "a-z") {
            sortedProducts = sortAlpha(items);
        }
        // Reverse Alphabet Sorting A-Z
        if (sortOrder.toLowerCase() === "z-a") {
            sortedProducts = sortAlpha(items).reverse();
        }
        // Low to High Price Sorting
        if (sortOrder.toLowerCase() === "low-high") {
            sortedProducts = sortPrice(items);
        }
        // High to Low Price Sorting
        if (sortOrder.toLowerCase() === "high-low") {
            sortedProducts = sortPrice(items).reverse();
        }

        console.log(sortedProducts.length, " this is sorted profucts")

        // Return new sorted products in status
        return await res.status(200).json({
            status: 200,
            message: `Successfully retrieved all products, sorted by Alphabet: ${sortOrder}`,
            data: sortedProducts,
            resultsFound: sortedProducts.length,
        })
    }
    catch (err) {
        console.log("sortByAlphabet Error:", err);
    }
};

// Module exports
module.exports = { getSortedProducts };