import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import IRepositoryCatalog from 'src/database/repositories/IRepositoryCatalog';
import { CreatePlayerDto } from './interfaces/dtos/create-player.dto';
import { UpdatePlayerDto } from './interfaces/dtos/update-player.dto';
import { IPlayer } from './interfaces/player';

@Injectable()
export class PlayersService {
  private reposirory: IRepositoryCatalog;

  constructor(@Inject('REPOSITORY_CATALOG') repository: IRepositoryCatalog) {
    this.reposirory = repository;
  }

  async createPlayer(player: CreatePlayerDto): Promise<IPlayer> {
    const Existingplayer = await this.reposirory.user.findBy(
      'email',
      player.email,
    );
    if (Existingplayer) {
      throw new BadRequestException(`User already exists`);
    }
    return this.reposirory.user.insert(player);
  }

  async updatePlayer(id, player: UpdatePlayerDto): Promise<any> {
    await this.reposirory.user.update(id, player);
    return 'ok';
  }

  async getAllPlayers(): Promise<IPlayer[]> {
    return this.reposirory.user.getAll();
  }

  async deletePlayer(id: number): Promise<IPlayer> {
    return this.reposirory.user.delete(id);
  }

  async findPlayerOrFail(id: number): Promise<IPlayer> {
    const result = await this.reposirory.user.findById(id);
    if (!result) {
      throw new BadRequestException(`Player with id ${id} not found`);
    }
    return result;
  }
}
