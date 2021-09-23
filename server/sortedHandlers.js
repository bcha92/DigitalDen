// Parses JSON files
const fs = require("fs");
const items = JSON.parse(fs.readFileSync("data/items.json"));

// Error Handler
const { Error404 } = require("./ErrorHandler");

// GET all products sorted alphabetically (A-Z);
const getSortedProducts = async (req, res) => {
    const { sortOrder } = req.params; // "a-z" or "z-a"
    let sortedProducts;

    // Sorting Algorithm by Item Name
    const sortAlpha = (arr) => {
        let newArr = []; // New Array Object
        // Pushes each "name" to new array in "lower case"
        arr.forEach(item => {
            newArr.push(item.name.toLowerCase());
        });
        newArr.sort(); // sort alphabetically

        // The names in the newly sorted array is then replaced by the actual object it is holding
        newArr.forEach((item, index) => {
            let newObj;
            arr.forEach(obj => {
                if (obj.name.toLowerCase() === item) {
                    newObj = obj;
                }
            });
            // Each "product name" is replaced by the object
            newArr[index] = newObj;
        })
        return newArr; // Returns new array as final sorted products
    }

    // Sorting Algorithm by Price
    const sortPrice = (arr) => {
        let newArr = []; // New Array Object
        // Pushes each "price" to new array
        arr.forEach(item => {
            // Separates price string from "," and "non-number strings"
            let priceSlice = item.price.split(" ")[0].slice(1,).split(",").join("");
            newArr.push(priceSlice);
        })
        newArr.sort((a, b) => a - b); // sort low to high by price

        // Restoring "commas" to prices higher than 1000.00 to and "$" symbols
        newArr.forEach((item, index) => {
            if (item.length > 6) {
                let old = item.split("");
                old.splice(1, 0, ",");
                old.splice(0, 0, "$");
                newArr[index] = old.join("");
            }
            else {
                let oldPrice = item.split("");
                oldPrice.splice(0, 0, "$");
                newArr[index] = oldPrice.join("");
            }
        })

        // The prices in the newly sorted array is then replaced by the actual object it is holding
        newArr.forEach((item, index) => {
            for (i = 0; i < arr.length; i++) {
                if (arr[i].price.includes(item)) {
                    newArr[index] = arr[i];
                    arr.splice(i, 1);
                    break;
                }
            }
        })

        // The prices in the newly sorted array is then replaced by the actual object it is holding
        return newArr; // Returns new array as final sorted products
    }

    try {
        // Forward Alphabet Sorting A-Z
        if (sortOrder.toLowerCase() === "a-z") {
            sortedProducts = sortAlpha(items);
        }
        // Reverse Alphabet Sorting A-Z
        else if (sortOrder.toLowerCase() === "z-a") {
            sortedProducts = sortAlpha(items).reverse();
        }
        // Low to High Price Sorting
        else if (sortOrder.toLowerCase() === "low-high") {
            sortedProducts = sortPrice(items);
        }
        else if (sortOrder.toLowerCase() === "high-low") {
            sortedProducts = sortPrice(items).reverse();
        }
        else {
            // Error Handling for any other sortOrder entry
            return res.status(404).json(Error404); // END
        }

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