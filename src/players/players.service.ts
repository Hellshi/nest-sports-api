import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userEntity } from '../database/entities/user.entity';
import { CreatePlayerDto } from './interfaces/dtos/create-player.dto';
import { UpdatePlayerDto } from './interfaces/dtos/update-player.dto';
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

  async updatePlayer(id, player: UpdatePlayerDto): Promise<any> {
    const Existingplayer = await this.usersRepository.findOneOrFail(id);
    await this.usersRepository.update(Existingplayer.id, player);
    return 'ok';
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
