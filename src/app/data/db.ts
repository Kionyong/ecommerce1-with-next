import mysql from "mysql2/promise";
const config = mysql.createPool({
      host: process.env.HOST || 'localhost',
      user: process.env.USER || 'root',
      password: process.env.PWD || '',
      database: process.env.DB || 'dbcompany',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
});
export default config;