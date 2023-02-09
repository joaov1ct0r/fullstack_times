import express from "express";
import Resolver from "../utils/Resolver";
import CreateTimeController from "../controllers/time/CreateTimeController";
import EditTimeController from "../controllers/time/EditTimeController";
import DeleteTimeController from "../controllers/time/DeleteTimeController";
import GetTimeController from "../controllers/time/GetTimeController";
import GetTimesController from "../controllers/time/GetTimesController";

const timeRouter = express.Router();
const resolver = new Resolver();
const createTimeController = new CreateTimeController();
const editTimeController = new EditTimeController();
const deleteTimeController = new DeleteTimeController();
const getTimeController = new GetTimeController();
const getTimesController = new GetTimesController();

timeRouter.post("/create", resolver.handle(createTimeController.handle));

timeRouter.put("/edit", resolver.handle(editTimeController.handle));

timeRouter.delete("/delete", resolver.handle(deleteTimeController.handle));

timeRouter.get("/time", resolver.handle(getTimeController.handle));

timeRouter.get("/times", resolver.handle(getTimesController.handle));

export default timeRouter;
