import { Request, Response } from "express";
import ValidateTime from "../validations/validateTime";
import BadRequest from "../errors/BadRequest";
import GetTimeRepository from "../database/repositories/GetTimeRepository";
import DeleteTimeRepository from "../database/repositories/DeleteTimeRepository";
import DeleteTimeService from "../services/DeleteTimeService";

export default class DeleteTimeController {
  private readonly validateTime: ValidateTime;
  private readonly getTimeRepository: GetTimeRepository;
  private readonly deleteTimeRepository: DeleteTimeRepository;
  private readonly deleteTimeService: DeleteTimeService;

  constructor() {
    this.validateTime = new ValidateTime();
    this.getTimeRepository = new GetTimeRepository();
    this.deleteTimeRepository = new DeleteTimeRepository();
    this.deleteTimeService = new DeleteTimeService(
      this.getTimeRepository,
      this.deleteTimeRepository
    );
  }

  async handle(req: Request, res: Response) {
    const { error } = this.validateTime.validateDeleteTime(req.body);

    if (error) {
      throw new BadRequest(error.message);
    }

    const { id } = req.body;

    try {
      await this.deleteTimeService.execute(Number(id));

      return res.status(204).send();
    } catch (err: any) {
      return res.status(err.statusCode).json({
        error: err.message,
        status: err.statusCode,
      });
    }
  }
}
