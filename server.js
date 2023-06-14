// server.js

const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");
app.set("views", path.join(__dirname, "views"));
console.log(path.join(__dirname, "views")); // C:\Users\user\Desktop\登入畫面MVC\views  

// 設定視圖引擎
app.set("view engine", "ejs");

// 解析 POST 請求的內容
app.use(express.urlencoded({ extended: true }));

// 設定路由
app.use("/", routes);

// 啟動伺服器
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

