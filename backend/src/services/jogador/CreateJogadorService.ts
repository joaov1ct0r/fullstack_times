import BadRequest from "../../errors/BadRequest";
import ICreateJogadorRepository from "../../interfaces/jogador/ICreateJogadorRepository";
import IGetJogadorRepository from "../../interfaces/jogador/IGetJogadorRepository";
import IGetTimeRepository from "../../interfaces/time/IGetTimeRepository";

export default class CreateJogadorService {
  private readonly getJogadorRepository: IGetJogadorRepository;
  private readonly getTimeRepository: IGetTimeRepository;
  private readonly createJogadorRepository: ICreateJogadorRepository;

  constructor(
    getJogadorRepository: IGetJogadorRepository,
    getTimeRepository: IGetTimeRepository,
    createJogadorRepository: ICreateJogadorRepository
  ) {
    this.getJogadorRepository = getJogadorRepository;
    this.getTimeRepository = getTimeRepository;
    this.createJogadorRepository = createJogadorRepository;
  }

  async execute(nome: string, idade: number, id: number) {
    const isJogadorRegistered = await this.getJogadorRepository.execute(nome);

    if (isJogadorRegistered) {
      throw new BadRequest("Jogador já cadastrado!");
    }

    const isTimeAvailable = await this.getTimeRepository.execute(undefined, id);

    if (!isTimeAvailable) {
      throw new BadRequest("Time não encontrado!");
    }

    if (isTimeAvailable.Jogador!.length === 5) {
      throw new BadRequest("Capacidade de jogadores excedida!");
    }

    const jogador = await this.createJogadorRepository.execute(nome, idade, id);

    return jogador;
  }
}
