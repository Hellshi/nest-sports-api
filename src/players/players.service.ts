import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userEntity } from '../database/entities/user.entity';
import { CreatePlayerDto } from './interfaces/dtos/create-player.dto';
import { IPlayer } from './interfaces/player';

@Injectable()
export class PlayersService {
  private players: IPlayer[] = [];

  constructor(
    @InjectRepository(userEntity)
    private usersRepository: Repository<userEntity>,
  ) {}

  async findPlayerOrFail(email: string): Promise<IPlayer> {
    const player = await this.findPlayer(email);
    if (!player) {
      throw new NotFoundException(`Not found player`);
    }
    return player;
  }

  async findPlayer(email: string): Promise<IPlayer | undefined> {
    const player = this.players.filter((player) => player.email === email);
    return player[0];
  }

  async createOrUpdatePlayer(player: CreatePlayerDto): Promise<IPlayer> {
    const Existingplayer = await this.findPlayer(player.email);
    if (!Existingplayer) {
      return this.create(player);
    }
    return this.updatePlayer(Existingplayer, player);
  }

  private updatePlayer(oldPlayer: IPlayer, newPlayer: CreatePlayerDto) {
    return { ...oldPlayer, ...newPlayer };
  }

  private async create(player: CreatePlayerDto): Promise<IPlayer> {
    return this.usersRepository.save(player);
  }

  async getAllPlayers(): Promise<IPlayer[]> {
    return this.players;
  }

  async deletePlayer(email: string): Promise<IPlayer[]> {
    await this.findPlayerOrFail(email);
    const newplayers = this.players.filter((player) => player.email !== email);
    this.players = newplayers;
    return this.players;
  }
}
