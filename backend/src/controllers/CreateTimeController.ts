import { Request, Response } from "express";
import ValidateTime from "../../validations/validateTime";
import BadRequest from "../../errors/BadRequest";
import GetTimeRepository from "../../database/repositories/time/GetTimeRepository";
import CreateTimeRepository from "../../database/repositories/time/CreateTimeRepository";
import CreateTimeService from "../../services/CreateTimeService";

export default class CreateTimeController {
  async handle(req: Request, res: Response) {
    const { error } = new ValidateTime().validateCreateTime(req.body);

    if (error) {
      throw new BadRequest(error.message);
    }

    const { nome } = req.body;

    const getTimeRepository = new GetTimeRepository();

    const createTimeRepository = new CreateTimeRepository();

    const createTimeService = new CreateTimeService(
      getTimeRepository,
      createTimeRepository
    );

    try {
      const time = await createTimeService.execute(nome);

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
