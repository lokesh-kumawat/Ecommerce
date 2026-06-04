require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");


const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());


// routes 
const userRoutes = require("./routes/user.routes");
const product = require("./controller/product.controller")

const adminProductRoutes = require("./routes/product.routes");


app.use("/api", userRoutes);


// admin routes
app.use("/api/admin/product", adminProductRoutes);

// Public route for products
app.get("/api/product", product.getAll);


// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Global Error:", err);
  require('fs').writeFileSync('global_error.log', err.stack || err.message);
  res.status(500).json({ error: err.message || "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});