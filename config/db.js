// db.js

// 在這裡配置資料庫連接，例如使用 Mongoose 或其他資料庫連接工具

const nano = require('nano')('http://localhost:5984'); // 根據你的 CouchDB 伺服器設定 URL

const dbName = 'login'; // 你的資料庫名稱

// 創建或獲取資料庫
const db = nano.use(dbName);

module.exports = db;
