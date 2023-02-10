import express from "express";
import CreateJogadorController from "../controllers/jogador/CreateJogadorController";
import Resolver from "../utils/Resolver";

const jogadorRouter = express.Router();
const resolver = new Resolver();
const createJogadorController = new CreateJogadorController();

jogadorRouter.post("/create", resolver.handle(createJogadorController.handle));

export default jogadorRouter;
