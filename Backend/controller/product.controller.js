const Product = require("../model/product.model");
const cloudinary = require("../config/cloudinary.config");

// CREATE
exports.create = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) {
      data.img_url = req.file.path;
    }
    const result = await Product.createProduct(data);
    res.json({ message: "Product created", data: result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL
exports.getAll = async (req, res) => {
  try {
    const data = await Product.getAllProducts();
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ONE
exports.getOne = async (req, res) => {
  try {
    const data = await Product.getProductById(req.params.id);
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.update = async (req, res) => {
  try {
    const data = { ...req.body };
    if (req.file) {
      data.img_url = req.file.path;

      // Delete old image from Cloudinary
      const oldProduct = await Product.getProductById(req.params.id);
      if (oldProduct && oldProduct.img_url) {
        try {
          const parts = oldProduct.img_url.split('/');
          const filename = parts[parts.length - 1];
          const folder = parts[parts.length - 2]; 
          // Assuming it's in a folder like Ecom_project
          const public_id = `${folder}/${filename.split('.')[0]}`;
          
          await cloudinary.uploader.destroy(public_id);
        } catch (cloudinaryErr) {
          console.error("Error deleting old image from cloudinary:", cloudinaryErr);
        }
      }
    }
    
    // Convert undefined to null for mysql2
    const safeData = {
      product_name: data.product_name || null,
      description: data.description || null,
      img_url: data.img_url || null,
      price: data.price || null,
      discount: data.discount || 0,
      is_popular: data.is_popular || 0,
    };
    
    await Product.updateProduct(req.params.id, safeData);
    res.json({ message: "Product updated" });
  } catch (err) {
    console.error("Update Error:", err);
    require('fs').writeFileSync('update_error.log', err.stack || err.message);
    res.status(500).json({ error: err.message });
  }
};

// DELETE
exports.remove = async (req, res) => {
  try {
    await Product.deleteProduct(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};