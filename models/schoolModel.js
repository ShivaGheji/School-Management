import { pool } from "../database/db.js";
import calculateDistance from "../utils/calDistance.js";

export const insertSchool = async (school) => {
  try {
    const { name, address, latitude, longitude } = school;
    const [result] = await pool.execute(
      "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
      [name, address, latitude, longitude]
    );
    return result.insertId;
  } catch (error) {
    throw error;
  }
};

export const getAllSchools = async (userLat, userLon) => {
  try {
    const [schools] = await pool.query("SELECT * FROM schools");

    const results = schools.map((school) => {
      const schoolLat = parseFloat(school.latitude);
      const schoolLon = parseFloat(school.longitude);

      const distance = calculateDistance(
        userLat,
        userLon,
        schoolLat,
        schoolLon
      );
      return { ...school, distance };
    });
    return results;
  } catch (error) {
    throw error;
  }
};
