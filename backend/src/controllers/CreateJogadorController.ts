import { Request, Response } from "express";
import ValidateJogador from "../validations/validateJogador";
import BadRequest from "../errors/BadRequest";
import GetJogadorRepository from "../database/repositories/GetJogadorRepository";
import GetTimeRepository from "../database/repositories/GetTimeRepository";
import CreateJogadorRepository from "../database/repositories/CreateJogadorRepository";
import CreateJogadorService from "../services/CreateJogadorService";

export default class CreateJogadorController {
  private readonly validateJogador: ValidateJogador;
  private readonly getJogadorRepository: GetJogadorRepository;
  private readonly getTimeRepository: GetTimeRepository;
  private readonly createJogadorRepository: CreateJogadorRepository;
  private readonly createJogadorService: CreateJogadorService;

  constructor() {
    this.validateJogador = new ValidateJogador();
    this.getJogadorRepository = new GetJogadorRepository();
    this.getTimeRepository = new GetTimeRepository();
    this.createJogadorRepository = new CreateJogadorRepository();
    this.createJogadorService = new CreateJogadorService(
      this.getJogadorRepository,
      this.getTimeRepository,
      this.createJogadorRepository
    );
  }

  async handle(req: Request, res: Response) {
    const { error } = this.validateJogador.validateCreateJogador(req.body);

    if (error) {
      throw new BadRequest(error.message);
    }

    const { nome, idade, time_id } = req.body;

    try {
      const jogador = await this.createJogadorService.execute(
        nome,
        Number(idade),
        Number(time_id)
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
