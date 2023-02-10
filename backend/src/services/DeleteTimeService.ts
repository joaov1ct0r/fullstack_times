import BadRequest from "../errors/BadRequest";
import IDeleteTimeRepository from "../interfaces/IDeleteTimeRepository";
import IGetTimeRepository from "../interfaces/IGetTimeRepository";

export default class DeleteTimeService {
  private readonly getTimeRepository: IGetTimeRepository;
  private readonly deleteTimeRepository: IDeleteTimeRepository;

  constructor(
    getTimeRepository: IGetTimeRepository,
    deleteTimeRepository: IDeleteTimeRepository
  ) {
    this.getTimeRepository = getTimeRepository;
    this.deleteTimeRepository = deleteTimeRepository;
  }

  async execute(id: number) {
    const isTimeRegistered = await this.getTimeRepository.execute(
      undefined,
      id
    );

    if (!isTimeRegistered) {
      throw new BadRequest("Time não encontado!");
    }

    await this.deleteTimeRepository.execute(id);
  }
}
