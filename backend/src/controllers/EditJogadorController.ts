import { Request, Response } from "express";
import ValidateJogador from "../validations/validateJogador";
import BadRequest from "../errors/BadRequest";
import GetJogadorRepository from "../database/repositories/GetJogadorRepository";
import GetTimeRepository from "../database/repositories/GetTimeRepository";
import EditJogadorRepository from "../database/repositories/EditJogadorRepository";
import EditJogadorService from "../services/EditJogadorService";

export default class EditJogadorController {
  async handle(req: Request, res: Response) {
    const { error } = new ValidateJogador().validateEditJogador(req.body);

    if (error) {
      throw new BadRequest(error.message);
    }

    const { id, nome, idade, time_id } = req.body;

    const getJogadorRepository = new GetJogadorRepository();

    const getTimeRepository = new GetTimeRepository();

    const editJogadorRepository = new EditJogadorRepository();

    const editJogadorService = new EditJogadorService(
      getJogadorRepository,
      getTimeRepository,
      editJogadorRepository
    );

    try {
      await editJogadorService.execute(
        Number(id),
        nome,
        Number(idade),
        Number(time_id)
      );

      return res.status(204).send();
    } catch (err: any) {
      return res.status(err.statusCode).json({
        error: err.message,
        status: err.statusCode,
      });
    }
  }
}
