const express = require("express");
const Product = require("./productModel"); // Importing product model

const router = express.Router();

// Route to create a new product
router.post("/product", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
});

module.exports = router;
