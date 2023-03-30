import { Request, Response } from "express";
import ValidateTime from "../validations/validateTime";
import BadRequest from "../errors/BadRequest";
import GetTimeRepository from "../database/repositories/GetTimeRepository";
import CreateTimeRepository from "../database/repositories/CreateTimeRepository";
import CreateTimeService from "../services/CreateTimeService";

export default class CreateTimeController {
  private readonly validateTime: ValidateTime;
  private readonly getTimeRepository: GetTimeRepository;
  private readonly createTimeRepository: CreateTimeRepository;
  private readonly createTimeService: CreateTimeService;

  constructor() {
    this.validateTime = new ValidateTime();
    this.getTimeRepository = new GetTimeRepository();
    this.createTimeRepository = new CreateTimeRepository();
    this.createTimeService = new CreateTimeService(
      this.getTimeRepository,
      this.createTimeRepository
    );
  }

  async handle(req: Request, res: Response) {
    const { error } = this.validateTime.validateCreateTime(req.body);

    if (error) {
      throw new BadRequest(error.message);
    }

    const { nome } = req.body;

    try {
      const time = await this.createTimeService.execute(nome);

      return res
        .status(201)
        .json({ time, message: "Time criado com sucesso!" });
    } catch (err: any) {
      return res.status(err.statusCode).json({
        error: err.message,
        status: err.statusCode,
      });
    }
  }
}
