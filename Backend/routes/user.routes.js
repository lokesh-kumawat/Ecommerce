const express = require("express");
const router = express.Router();
const controller = require("../controller/user.controller");
const { verifyAccessToken} = require("../middleware/auth.middleware");

router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/refresh", controller.refresh);
router.post("/logout", verifyAccessToken, controller.logout);



module.exports = router;