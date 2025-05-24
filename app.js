import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import errorMiddleware from "./middlewares.js";
import schoolRoutes from "./routes/schoolRoutes.routes.js";
import connectToDatabase from "./database/db.js";
import { PORT } from "./config/env.js";

app.use("/", schoolRoutes);
app.use(errorMiddleware);

const startServer = async () => {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err.message);
    process.exit(1);
  }
};
startServer();
