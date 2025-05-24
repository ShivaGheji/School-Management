import mysql from "mysql2/promise";
import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } from "../config/env.js";

let pool;

const connectToDatabase = async () => {
  try {
    pool = mysql.createPool({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    const conn = await pool.getConnection();
    console.log("Connected to MySQL DB");
    conn.release();
  } catch (err) {
    throw new Error("DB connection failed: " + err.message);
  }
};

export default connectToDatabase;
export { pool };
