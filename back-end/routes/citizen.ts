import express from "express";
import controller from "../controllers/citizen";

const router = express.Router();

router.get("/citizens", controller.getAllCitizens);

export default router;
