import { Request, Response } from "express";
import ValidateTime from "../validations/validateTime";
import BadRequest from "../errors/BadRequest";
import GetTimeRepository from "../database/repositories/GetTimeRepository";
import GetTimeService from "../services/GetTimeService";

export default class GetTimeController {
  private readonly validateTime: ValidateTime;
  private readonly getTimeRepository: GetTimeRepository;
  private readonly getTimeService: GetTimeService;

  constructor() {
    this.validateTime = new ValidateTime();
    this.getTimeRepository = new GetTimeRepository();
    this.getTimeService = new GetTimeService(this.getTimeRepository);
  }

  async handle(req: Request, res: Response) {
    const { error } = this.validateTime.validateGetTime(req.body);

    if (error) {
      throw new BadRequest(error.message);
    }

    const { nome } = req.body;

    try {
      const time = await this.getTimeService.execute(nome);

      return res.status(200).json({ time, message: "Success" });
    } catch (err: any) {
      return res.status(err.statusCode).json({
        error: err.message,
        status: err.statusCode,
      });
    }
  }
}
