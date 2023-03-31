import { Request, Response } from "express";
import ValidateJogador from "../validations/validateJogador";
import BadRequest from "../errors/BadRequest";
import GetJogadorRepository from "../database/repositories/GetJogadorRepository";
import GetTimeRepository from "../database/repositories/GetTimeRepository";
import EditJogadorRepository from "../database/repositories/EditJogadorRepository";
import EditJogadorService from "../services/EditJogadorService";

export default class EditJogadorController {
  private readonly validateJogador: ValidateJogador;
  private readonly getJogadorRepository: GetJogadorRepository;
  private readonly getTimeRepository: GetTimeRepository;
  private readonly editJogadorRepository: EditJogadorRepository;
  private readonly editJogadorService: EditJogadorService;

  constructor() {
    this.validateJogador = new ValidateJogador();
    this.getJogadorRepository = new GetJogadorRepository();
    this.getTimeRepository = new GetTimeRepository();
    this.editJogadorRepository = new EditJogadorRepository();
    this.editJogadorService = new EditJogadorService(
      this.getJogadorRepository,
      this.getTimeRepository,
      this.editJogadorRepository
    );
  }

  async handle(req: Request, res: Response) {
    const { error } = this.validateJogador.validateEditJogador(req.body);

    if (error) {
      throw new BadRequest(error.message);
    }

    const { id, nome, idade, time_id } = req.body;

    try {
      await this.editJogadorService.execute(
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
