import { Request, Response } from "express";
import ValidateTime from "../validations/validateTime";
import BadRequest from "../errors/BadRequest";
import GetTimeRepository from "../database/repositories/GetTimeRepository";
import EditTimeRepository from "../database/repositories/EditTimeRepository";
import EditTimeService from "../services/EditTimeService";

export default class EditTimeController {
  private readonly validateTime: ValidateTime;
  private readonly getTimeRepository: GetTimeRepository;
  private readonly editTimeRepository: EditTimeRepository;
  private readonly editTimeService: EditTimeService;

  constructor() {
    this.validateTime = new ValidateTime();
    this.getTimeRepository = new GetTimeRepository();
    this.editTimeRepository = new EditTimeRepository();
    this.editTimeService = new EditTimeService(
      this.getTimeRepository,
      this.editTimeRepository
    );
  }

  async handle(req: Request, res: Response) {
    const { error } = this.validateTime.validateEditTime(req.body);

    if (error) {
      throw new BadRequest(error.message);
    }

    const { id, nome } = req.body;

    try {
      await this.editTimeService.execute(Number(id), nome);

      return res.status(204).send();
    } catch (err: any) {
      return res.status(err.statusCode).json({
        error: err.message,
        status: err.statusCode,
      });
    }
  }
}
