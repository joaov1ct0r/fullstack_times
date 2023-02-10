import { Request, Response } from "express";
import ValidateTime from "../validations/validateTime";
import BadRequest from "../errors/BadRequest";
import GetTimeRepository from "../database/repositories/GetTimeRepository";
import DeleteTimeRepository from "../database/repositories/DeleteTimeRepository";
import DeleteTimeService from "../services/DeleteTimeService";

export default class DeleteTimeController {
  async handle(req: Request, res: Response) {
    const { error } = new ValidateTime().validateDeleteTime(req.body);

    if (error) {
      throw new BadRequest(error.message);
    }

    const { id } = req.body;

    const getTimeRepository = new GetTimeRepository();

    const deleteTimeRepository = new DeleteTimeRepository();

    const deleteTimeService = new DeleteTimeService(
      getTimeRepository,
      deleteTimeRepository
    );

    try {
      await deleteTimeService.execute(Number(id));

      return res.status(204).send();
    } catch (err: any) {
      return res.status(err.statusCode).json({
        error: err.message,
        status: err.statusCode,
      });
    }
  }
}
