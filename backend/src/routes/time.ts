import express from "express";
import Resolver from "../utils/Resolver";
import CreateTimeController from "../controllers/time/CreateTimeController";
import EditTimeController from "../controllers/time/EditTimeController";

const timeRouter = express.Router();
const resolver = new Resolver();
const createTimeController = new CreateTimeController();
const editTimeController = new EditTimeController();

timeRouter.post("/create", resolver.handle(createTimeController.handle));

timeRouter.put("/edit", resolver.handle(editTimeController.handle));

export default timeRouter;
