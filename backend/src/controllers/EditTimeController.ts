import { Request, Response } from "express";
import ValidateTime from "../validations/validateTime";
import BadRequest from "../errors/BadRequest";
import GetTimeRepository from "../database/repositories/GetTimeRepository";
import EditTimeRepository from "../database/repositories/EditTimeRepository";
import EditTimeService from "../services/EditTimeService";

export default class EditTimeController {
  async handle(req: Request, res: Response) {
    const { error } = new ValidateTime().validateEditTime(req.body);

    if (error) {
      throw new BadRequest(error.message);
    }

    const { id, nome } = req.body;

    const getTimeRepository = new GetTimeRepository();

    const editTimeRepository = new EditTimeRepository();

    const editTimeService = new EditTimeService(
      getTimeRepository,
      editTimeRepository
    );

    try {
      await editTimeService.execute(Number(id), nome);

      return res.status(204).send();
    } catch (err: any) {
      return res.status(err.statusCode).json({
        error: err.message,
        status: err.statusCode,
      });
    }
  }
}
