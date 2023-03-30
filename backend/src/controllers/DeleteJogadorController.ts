import { Request, Response } from "express";
import ValidateJogador from "../validations/validateJogador";
import BadRequest from "../errors/BadRequest";
import GetJogadorRepository from "../database/repositories/GetJogadorRepository";
import DeleteJogadorRepository from "../database/repositories/DeleteJogadorRepository";
import DeleteJogadorService from "../services/DeleteJogadorService";

export default class DeleteJogadorController {
  private readonly validateJogador: ValidateJogador;
  private readonly getJogadorRepository: GetJogadorRepository;
  private readonly deleteJogadorRepository: DeleteJogadorRepository;
  private readonly deleteJogadorService: DeleteJogadorService;

  constructor() {
    this.validateJogador = new ValidateJogador();
    this.getJogadorRepository = new GetJogadorRepository();
    this.deleteJogadorRepository = new DeleteJogadorRepository();
    this.deleteJogadorService = new DeleteJogadorService(
      this.getJogadorRepository,
      this.deleteJogadorRepository
    );
  }

  async handle(req: Request, res: Response) {
    const { error } = this.validateJogador.validateDeleteJogador(req.body);

    if (error) {
      throw new BadRequest(error.message);
    }

    const { id } = req.body;

    try {
      await this.deleteJogadorService.execute(Number(id));

      return res.status(204).send();
    } catch (err: any) {
      return res.status(err.statusCode).json({
        error: err.message,
        status: err.statusCode,
      });
    }
  }
}
