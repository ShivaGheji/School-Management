import { Router } from "express";
import { addSchool, listSchools } from "../controllers/school.controller.js";

const schoolRouter = Router();

schoolRouter.get("/schools", listSchools);
schoolRouter.post("/schools", addSchool);

export default schoolRouter;
