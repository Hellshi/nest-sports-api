import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import IRepositoryCatalog from 'src/database/repositories/IRepositoryCatalog';
import { Repository } from 'typeorm';
import { UserEntity } from '../database/entities/user.entity';
import { CreatePlayerDto } from './interfaces/dtos/create-player.dto';
import { UpdatePlayerDto } from './interfaces/dtos/update-player.dto';
import { IPlayer } from './interfaces/player';

@Injectable()
export class PlayersService {
  private players: IPlayer[] = [];
  private reposirory: IRepositoryCatalog;

  constructor(
    @Inject('BaseRepository') reposirory: IRepositoryCatalog,
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
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
    console.log(await this.reposirory.user.getAll());
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
