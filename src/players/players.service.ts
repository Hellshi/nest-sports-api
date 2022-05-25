import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { IUserRepository } from 'src/database/repositories/userRepository/IUserRepository';
import { CreatePlayerDto } from './interfaces/dtos/create-player.dto';
import { UpdatePlayerDto } from './interfaces/dtos/update-player.dto';
import { IPlayer } from './interfaces/player';

@Injectable()
export class PlayersService {
  private reposirory: IUserRepository;

  constructor(@Inject('REPOSITORY_CATALOG') repository: IUserRepository) {
    this.reposirory = repository;
  }

  async createPlayer(player: CreatePlayerDto): Promise<IPlayer> {
    const Existingplayer = await this.reposirory.findBy('email', player.email);
    if (Existingplayer) {
      throw new BadRequestException(`User already exists`);
    }
    return this.reposirory.insert(player);
  }

  async updatePlayer(id, player: UpdatePlayerDto): Promise<any> {
    await this.reposirory.update(id, player);
    return 'ok';
  }

  async getAllPlayers(): Promise<IPlayer[]> {
    return this.reposirory.getAll();
  }

  async deletePlayer(id: number): Promise<IPlayer> {
    return this.reposirory.delete(id);
  }

  async findPlayerOrFail(id: number): Promise<IPlayer> {
    const result = await this.reposirory.findById(id);
    if (!result) {
      throw new BadRequestException(`Player with id ${id} not found`);
    }
    return result;
  }
}
