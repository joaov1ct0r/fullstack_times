import express from "express";
import Resolver from "../utils/Resolver";
import CreateTimeController from "../controllers/time/CreateTimeController";
import EditTimeController from "../controllers/time/EditTimeController";
import DeleteTimeController from "../controllers/time/DeleteTimeController";

const timeRouter = express.Router();
const resolver = new Resolver();
const createTimeController = new CreateTimeController();
const editTimeController = new EditTimeController();
const deleteTimeController = new DeleteTimeController();

timeRouter.post("/create", resolver.handle(createTimeController.handle));

timeRouter.put("/edit", resolver.handle(editTimeController.handle));

timeRouter.delete("/delete", resolver.handle(deleteTimeController.handle));

export default timeRouter;
