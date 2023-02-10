import { Request, Response } from "express";
import ValidateJogador from "../validations/validateJogador";
import BadRequest from "../errors/BadRequest";
import GetJogadorRepository from "../database/repositories/jogador/GetJogadorRepository";
import GetTimeRepository from "../database/repositories/time/GetTimeRepository";
import CreateJogadorRepository from "../database/repositories/jogador/CreateJogadorRepository";
import CreateJogadorService from "../services/CreateJogadorService";

export default class CreateJogadorController {
  async handle(req: Request, res: Response) {
    const { error } = new ValidateJogador().validateCreateJogador(req.body);

    if (error) {
      throw new BadRequest(error.message);
    }

    const { nome, idade, id } = req.body;

    const getJogadorRepository = new GetJogadorRepository();

    const getTimeRepository = new GetTimeRepository();

    const createJogadorRepository = new CreateJogadorRepository();

    const createJogadorService = new CreateJogadorService(
      getJogadorRepository,
      getTimeRepository,
      createJogadorRepository
    );

    try {
      const jogador = await createJogadorService.execute(
        nome,
        Number(idade),
        Number(id)
      );

      return res.status(201).json({ jogador, message: "Jogador criado" });
    } catch (err: any) {
      return res.status(err.statusCode).json({
        error: err.message,
        status: err.statusCode,
      });
    }
  }
}
