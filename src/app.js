import express from "express";
import cors from "cors";
import enquiryRoutes from "./routes/enquiry.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/enquiry", enquiryRoutes);

export default app;
