import BadRequest from "../../errors/BadRequest";
import IJogador from "../../interfaces/IJogador";
import IEditJogadorRepository from "../../interfaces/jogador/IEditJogadorRepository";
import IGetJogadorRepository from "../../interfaces/jogador/IGetJogadorRepository";
import IGetTimeRepository from "../../interfaces/time/IGetTimeRepository";

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

    if (isJogadorRegistered) {
      throw new BadRequest("Jogador já cadastrado!");
    }

    const isTimeRegistered = await this.getTimeRepository.execute(
      undefined,
      time_id
    );

    const isJogadorTeamPlayer = isTimeRegistered!.Jogador!.find(
      (jogador: IJogador) => jogador.id === id
    );

    if (!isJogadorTeamPlayer) {
      throw new BadRequest("Jogador não cadastrado no time!");
    }

    await this.editJogadorRepository.execute(id, nome, idade, time_id);
  }
}
