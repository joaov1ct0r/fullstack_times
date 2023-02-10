import BadRequest from "../errors/BadRequest";
import IEditTimeRepository from "../interfaces/IEditTimeRepository";
import IGetTimeRepository from "../interfaces/IGetTimeRepository";

export default class EditTimeService {
  private readonly getTimeRepository: IGetTimeRepository;
  private readonly editTimeRepository: IEditTimeRepository;

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

    const isNomeInUse = await this.getTimeRepository.execute(nome);

    if (isNomeInUse) {
      throw new BadRequest("Nome já cadastrado!");
    }

    await this.editTimeRepository.execute(id, nome);
  }
}
