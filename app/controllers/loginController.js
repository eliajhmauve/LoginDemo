// loginController.js

const path = require("path");
const User = require("../models/user");
const db = require("../config/db.js"); // 導入資料庫

// 登入頁面
exports.getLoginPage = (req, res) => {
  res.render(path.join(__dirname, "../views/login.ejs"));
};

// 登入處理
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // 在資料庫中根據使用者名稱查找使用者
    const user = await User.findByUsername(username);

    if (user && user.password === password) {
      // 登入成功，重定向到儀表板
      res.redirect("/dashboard");
    } else {
      // 登入失敗，重定向回登入頁面
      res.redirect("/login");
    }
  } catch (error) {
    // 發生錯誤，重定向回登入頁面
    res.redirect("/login");
  }
};
