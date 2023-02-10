import BadRequest from "../errors/BadRequest";
import IDeleteJogadorRepository from "../interfaces/IDeleteJogadorRepository";
import IGetJogadorRepository from "../interfaces/IGetJogadorRepository";

export default class DeleteJogadorService {
  private readonly getJogadorRepository: IGetJogadorRepository;
  private readonly deleteJogadorRepository: IDeleteJogadorRepository;

  constructor(
    getJogadorRepository: IGetJogadorRepository,
    deleteJogadorRepository: IDeleteJogadorRepository
  ) {
    this.getJogadorRepository = getJogadorRepository;
    this.deleteJogadorRepository = deleteJogadorRepository;
  }

  async execute(id: number) {
    const isJogadorRegistered = await this.getJogadorRepository.execute(
      undefined,
      id
    );

    if (isJogadorRegistered) {
      throw new BadRequest("Jogador não cadastrado!");
    }

    await this.deleteJogadorRepository.execute(id);
  }
}
