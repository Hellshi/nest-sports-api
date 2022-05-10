import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
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

  async createPlayer(player: CreatePlayerDto): Promise<IPlayer> {
    const Existingplayer = await this.usersRepository.findOne(undefined, {
      where: { email: player.email },
    });
    if (Existingplayer) {
      throw new BadRequestException(`Email already exists`);
    }
    return this.usersRepository.save(player);
  }

  async updatePlayer(player: CreatePlayerDto): Promise<UpdateResult> {
    const Existingplayer = await this.usersRepository.findOneOrFail(undefined, {
      where: { email: player.email },
    });
    return this.usersRepository.update(Existingplayer.id, player);
  }

  async getAllPlayers(): Promise<IPlayer[]> {
    return this.players;
  }

  async deletePlayer(id: number): Promise<IPlayer> {
    const player = await this.usersRepository.findOneOrFail(undefined, {
      where: { id },
    });
    return player.remove();
  }

  findPlayerOrFail(id: number): Promise<IPlayer> {
    return this.usersRepository.findOneOrFail(id);
  }
}
