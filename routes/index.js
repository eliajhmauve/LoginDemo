// index.js

const express = require("express");
const router = express.Router();
const loginController = require("../app/controllers/loginController");

// 登入頁面路由
router.get("/login", loginController.getLoginPage);

// 登入處理路由
router.post("/login", loginController.login);

// 根路徑重定向到登入頁面
router.get("/", (req, res) => {
  res.redirect("/login");
});

// 在路由處理函式中輸出當前請求的 URL
router.use((req, res, next) => {
  console.log(req.url);
  next();
});

module.exports = router;
