import BadRequest from "../../errors/BadRequest";
import IEditTimeRepository from "../../interfaces/time/IEditTimeRepository";
import IGetTimeRepository from "../../interfaces/time/IGetTimeRepository";

export default class EditTimeService {
  public readonly getTimeRepository: IGetTimeRepository;
  public readonly editTimeRepository: IEditTimeRepository;

  constructor(
    getTimeRepository: IGetTimeRepository,
    editTimeRepository: IEditTimeRepository
  ) {
    this.getTimeRepository = getTimeRepository;
    this.editTimeRepository = editTimeRepository;
  }

  async execute(id: number, nome: string) {
    const isTimeRegistered = await this.getTimeRepository.execute(
      undefined,
      id
    );

    if (!isTimeRegistered) {
      throw new BadRequest("Time não encontrado!");
    }

    await this.editTimeRepository.execute(id, nome);
  }
}
