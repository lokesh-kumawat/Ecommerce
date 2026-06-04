const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");
const {verifyAccessToken, isAdmin} = require("../middleware/auth.middleware")
const upload = require("../middleware/upload.middleware");


router.post("/", verifyAccessToken, isAdmin, upload.single("image"), productController.create);
router.get("/", verifyAccessToken, isAdmin, productController.getAll);
router.get("/:id", verifyAccessToken, isAdmin, productController.getOne);
router.put("/:id", verifyAccessToken, isAdmin, upload.single("image"), productController.update);
router.delete("/:id", verifyAccessToken, isAdmin, productController.remove);


module.exports = router;
