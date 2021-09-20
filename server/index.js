"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// Handlers
const { getBrands, getProductsByBrand } = require("./brandHandlers");
const { getProducts, getProductById, updateProduct } = require("./productHandlers");
const { getCategories, getProductsByCategory } = require("./categoryHandlers");

const PORT = 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST endpoints
  // EXAMPLE // FOR INSOMNIA TESTING ONLY!!!
  .get("/bacon", (req, res) => res.status(200).json("🥓"))
  // READY TO USE // SEE "---handlers.js" files for Descriptions
  .get("/brands", getBrands)
  // NOT READY (DO NOT USE!!!)
  .get("/brands/:brandId", getProductsByBrand)

  .get("/products", getProducts)
  .get("/products/:productId", getProductById)
  .patch("/products/:productId", updateProduct)

  .get("/category", getCategories)
  .get("/category/:categoryname", getProductsByCategory)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
