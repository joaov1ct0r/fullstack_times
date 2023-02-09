import BadRequest from "../../errors/BadRequest";
import ICreateTimeRepository from "../../interfaces/time/ICreateTimeRepository";
import IGetTimeRepository from "../../interfaces/time/IGetTimeRepository";

export default class CreateTimeService {
  public readonly createTimeRepository: ICreateTimeRepository;
  public readonly getTimeRepository: IGetTimeRepository;

  constructor(
    createTimeRepository: ICreateTimeRepository,
    getTimeRepository: IGetTimeRepository
  ) {
    this.getTimeRepository = getTimeRepository;
    this.createTimeRepository = createTimeRepository;
  }

  public async execute(nome: string) {
    const isTimeRegistered = await this.getTimeRepository.execute(nome);

    if (isTimeRegistered) {
      throw new BadRequest("Time já cadastrado!");
    }

    const time = await this.createTimeRepository.execute(nome);

    return time;
  }
}
