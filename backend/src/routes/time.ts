import express from "express";
import Resolver from "../utils/Resolver";
import CreateTimeController from "../controllers/CreateTimeController";

const timeRouter = express.Router();
const resolver = new Resolver();
const createTimeController = new CreateTimeController();

timeRouter.post("/create", resolver.handle(createTimeController.handle));

export default timeRouter;
