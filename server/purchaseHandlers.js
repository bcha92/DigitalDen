// Inventory Check Middleware
const inventoryCheck = async (req, res, next) => {
    next();
    // Once all checks are passed, middleware is complete and moves on to the "next" handler: purchaseHandle
};

// Purchase Handle
const purchaseHandle = async (req, res) => {
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

module.exports = { inventoryCheck, purchaseHandle };