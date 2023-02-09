import { Request, Response } from "express";
import GetTimesRepository from "../../database/repositories/time/GetTimesRepository";
import GetTimesService from "../../services/time/GetTimesService";

export default class GetTimesController {
  async handle(req: Request, res: Response) {
    const getTimesRepository = new GetTimesRepository();

    const getTimesService = new GetTimesService(getTimesRepository);

    try {
      const times = await getTimesService.execute();

      return res.status(200).json({ times, message: "Success" });
    } catch (err: any) {
      return res.status(err.statusCode).json({
        error: err.message,
        status: err.statusCode,
      });
    }
  }
}
