const db = require("../config/db.config");

exports.createProduct = async (data) => {
    const sql = `INSERT INTO products (product_name, description, img_url, price, discount, is_popular) VALUES(?,?,?,?,?,?)`;

    const [result] = await db.execute(sql, [
        data.product_name,
        data.description,
        data.img_url,
        data.price,
        data.discount,
        data.is_popular
    ]);
    return result
   
}


// GET ALL
exports.getAllProducts = async () => {
  const [rows] = await db.execute("SELECT * FROM products ORDER BY id DESC");
  return rows;
};

// GET SINGLE
exports.getProductById = async (id) => {
  const [rows] = await db.execute("SELECT * FROM products WHERE id = ?", [id]);
  return rows[0];
};

// UPDATE
exports.updateProduct = async (id, data) => {
  const sql = `
    UPDATE products 
    SET product_name=?, description=?, img_url=?, price=?, discount=?, is_popular=?
    WHERE id=?
  `;
  const [result] = await db.execute(sql, [
    data.product_name,
    data.description,
    data.img_url,
    data.price,
    data.discount,
    data.is_popular,
    id,
  ]);
  return result;
};

// DELETE
exports.deleteProduct = async (id) => {
  const [result] = await db.execute("DELETE FROM products WHERE id=?", [id]);
  return result;
};

