import { Request, Response } from "express";
import ValidateJogador from "../../validations/validateJogador";
import BadRequest from "../../errors/BadRequest";
import GetJogadorRepository from "../../database/repositories/jogador/GetJogadorRepository";
import DeleteJogadorRepository from "../../database/repositories/jogador/DeleteJogadorRepository";
import DeleteJogadorService from "../../services/jogador/DeleteJogadorService";

export default class DeleteJogadorController {
  async handle(req: Request, res: Response) {
    const { error } = new ValidateJogador().validateDeleteJogador(req.body);

    if (error) {
      throw new BadRequest(error.message);
    }

    const { id } = req.body;

    const getJogadorRepository = new GetJogadorRepository();

    const deleteJogadorRepository = new DeleteJogadorRepository();

    const deleteJogadorService = new DeleteJogadorService(
      getJogadorRepository,
      deleteJogadorRepository
    );

    try {
      await deleteJogadorService.execute(Number(id));

      return res.status(204).send();
    } catch (err: any) {
      return res.status(err.statusCode).json({
        error: err.message,
        status: err.statusCode,
      });
    }
  }
}
