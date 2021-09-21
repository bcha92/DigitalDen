"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

// Handlers
const { getBrands, getProductsByBrand } = require("./brandHandlers");
const { getProducts, getProductById, updateProductPurchase } = require("./productHandlers");
const { getCategories, getProductsByCategory } = require("./categoryHandlers");
const { Error404 } = require("./ErrorHandler");

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
  
    // EXAMPLE // FOR INSOMNIA TESTING ONLY!!!
    // .get("/bacon", (req, res) => res.status(200).json("🥓"))

  // REST endpoints // SEE each Handler in various "...handlers.js" files for Information and Descriptions
  .get("/brands", getBrands)
  .get("/brands/:_id", getProductsByBrand)
  
  .get("/products", getProducts)
  .get("/products/:_id", getProductById)
  .patch("/products/:_id", updateProductPurchase)
  
  .get("/category", getCategories)
  .get("/category/:categoryname", getProductsByCategory)

  // ERROR Handler 404 Not Found
  .get("*", (req, res) => res.status(404).json(Error404))

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
