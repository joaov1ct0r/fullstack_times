import express from "express";
import CreateJogadorController from "../controllers/CreateJogadorController";
import Resolver from "../utils/Resolver";
import EditJogadorController from "../controllers/EditJogadorController";
import DeleteJogadorController from "../controllers/DeleteJogadorController";

const jogadorRouter = express.Router();
const resolver = new Resolver();
const createJogadorController = new CreateJogadorController();
const editJogadorController = new EditJogadorController();
const deleteJogadorController = new DeleteJogadorController();

jogadorRouter.post("/create", resolver.handle(createJogadorController.handle));

jogadorRouter.put("/edit", resolver.handle(editJogadorController.handle));

jogadorRouter.delete(
  "/delete",
  resolver.handle(deleteJogadorController.handle)
);

export default jogadorRouter;
