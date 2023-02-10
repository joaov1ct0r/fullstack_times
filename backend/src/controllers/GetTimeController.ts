import { Request, Response } from "express";
import ValidateTime from "../../validations/validateTime";
import BadRequest from "../../errors/BadRequest";
import GetTimeRepository from "../../database/repositories/time/GetTimeRepository";
import GetTimeService from "../../services/time/GetTimeService";

export default class GetTimeController {
  async handle(req: Request, res: Response) {
    const { error } = new ValidateTime().validateGetTime(req.body);

    if (error) {
      throw new BadRequest(error.message);
    }

    const { nome } = req.body;

    const getTimeRepository = new GetTimeRepository();

    const getTimeService = new GetTimeService(getTimeRepository);

    try {
      const time = await getTimeService.execute(nome);

      return res.status(200).json({ time, message: "Success" });
    } catch (err: any) {
      return res.status(err.statusCode).json({
        error: err.message,
        status: err.statusCode,
      });
    }
  }
}
