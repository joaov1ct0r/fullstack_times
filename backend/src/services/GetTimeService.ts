import BadRequest from "../errors/BadRequest";
import IGetTimeRepository from "../interfaces/IGetTimeRepository";

export default class GetTimeService {
  private readonly getTimeRepository: IGetTimeRepository;

  constructor(getTimeRepository: IGetTimeRepository) {
    this.getTimeRepository = getTimeRepository;
  }

  async execute(nome: string) {
    const time = await this.getTimeRepository.execute(nome);

    if (!time) {
      throw new BadRequest("Time não encontrado!");
    }

    return time;
  }
}
