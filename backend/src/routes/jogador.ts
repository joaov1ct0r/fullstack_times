import express from "express";
import CreateJogadorController from "../controllers/jogador/CreateJogadorController";
import Resolver from "../utils/Resolver";
import EditJogadorController from "../controllers/jogador/EditJogadorController";

const jogadorRouter = express.Router();
const resolver = new Resolver();
const createJogadorController = new CreateJogadorController();
const editJogadorController = new EditJogadorController();

jogadorRouter.post("/create", resolver.handle(createJogadorController.handle));

jogadorRouter.put("/edit", resolver.handle(editJogadorController.handle));

export default jogadorRouter;
