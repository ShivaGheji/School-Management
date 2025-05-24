import { insertSchool, getAllSchools } from "../models/schoolModel.js";
import addSchoolSchema from "../schoolSchema.js";

export const addSchool = async (req, res, next) => {
  try {
    let { error } = addSchoolSchema.validate(req.body);
    if (error) {
      let newError = new Error(error.details[0].message);
      newError.statusCode = 400;
      throw newError;
    }
    const schoolId = await insertSchool(req.body);

    res.status(201).json({
      success: true,
      message: "School added successfully",
      schoolId: schoolId,
    });
  } catch (err) {
    next(err);
  }
};

export const listSchools = async (req, res, next) => {
  try {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
      const error = new Error("Latitude and Longitude are required");
      error.statusCode = 400;
      throw error;
    }

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    const schoolsWithDistance = await getAllSchools(userLat, userLon);

    schoolsWithDistance.sort((a, b) => a.distance - b.distance);

    res.status(200).json({
      success: true,
      count: schoolsWithDistance.length,
      data: schoolsWithDistance,
    });
  } catch (err) {
    next(err);
  }
};
