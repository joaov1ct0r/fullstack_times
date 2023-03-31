import { Request, Response } from "express";
import GetTimesRepository from "../database/repositories/GetTimesRepository";
import GetTimesService from "../services/GetTimesService";

export default class GetTimesController {
  private readonly getTimesRepository: GetTimesRepository;
  private readonly getTimesService: GetTimesService;

  constructor() {
    this.getTimesRepository = new GetTimesRepository();
    this.getTimesService = new GetTimesService(this.getTimesRepository);
  }

  async handle(req: Request, res: Response) {
    try {
      const times = await this.getTimesService.execute();

      return res.status(200).json({ times, message: "Success" });
    } catch (err: any) {
      return res.status(err.statusCode).json({
        error: err.message,
        status: err.statusCode,
      });
    }
  }
}
