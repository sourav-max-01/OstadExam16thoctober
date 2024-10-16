const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes"); // Import routes

const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/productsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Database connection error:", err));

// Use the product routes
app.use("/api", productRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
