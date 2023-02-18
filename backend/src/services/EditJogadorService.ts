import BadRequest from "../errors/BadRequest";
import IJogador from "../interfaces/IJogador";
import IEditJogadorRepository from "../interfaces/IEditJogadorRepository";
import IGetJogadorRepository from "../interfaces/IGetJogadorRepository";
import IGetTimeRepository from "../interfaces/IGetTimeRepository";

export default class EditJogadorService {
  private readonly getJogadorRepository: IGetJogadorRepository;
  private readonly getTimeRepository: IGetTimeRepository;
  private readonly editJogadorRepository: IEditJogadorRepository;

  constructor(
    getJogadorRepository: IGetJogadorRepository,
    getTimeRepository: IGetTimeRepository,
    editJogadorRepository: IEditJogadorRepository
  ) {
    this.getJogadorRepository = getJogadorRepository;
    this.getTimeRepository = getTimeRepository;
    this.editJogadorRepository = editJogadorRepository;
  }

  async execute(id: number, nome: string, idade: number, time_id: number) {
    const isJogadorRegistered = await this.getJogadorRepository.execute(
      undefined,
      id
    );

    if (!isJogadorRegistered) {
      throw new BadRequest("Jogador não cadastrado!");
    }

    const isTimeRegistered = await this.getTimeRepository.execute(
      undefined,
      time_id
    );

    if (!isTimeRegistered) {
      throw new BadRequest("Time não cadastrado!");
    }

    const isJogadorTeamPlayer = isTimeRegistered.Jogador!.find(
      (jogador: IJogador) => jogador.id === id
    );

    if (!isJogadorTeamPlayer) {
      throw new BadRequest("Jogador não cadastrado no time!");
    }

    const isNameInUse = await this.getJogadorRepository.execute(nome);

    if (isNameInUse) {
      throw new BadRequest("Nome já cadastrado!");
    }

    await this.editJogadorRepository.execute(id, nome, idade);
  }
}
