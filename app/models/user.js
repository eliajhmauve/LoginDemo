// user.js

const db = require("../../config/db");

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  // 將使用者物件儲存到資料庫
  async save() {
    const response = await db.insert(this);
    return response;
  }

  // 從資料庫中根據使用者名稱查找使用者
  static async findByUsername(username) {
    try {
      const response = await db.get(username);
      const user = new User(response.username, response.password);
      return user;
    } catch (error) {
      // 如果找不到使用者，或發生錯誤，返回 null
      return null;
    }
  }
}

module.exports = User;
