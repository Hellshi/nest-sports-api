import { Injectable, Logger } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { Player } from './interfaces/player';

@Injectable()
export class PlayersService {
  private players: Player[] = [];
  private readonly logger = new Logger(PlayersService.name);

  async createOrUpdatePlayer(player: CreatePlayerDto): Promise<Player> {
    this.logger.log(`Player being created ${player}`);
    return this.create(player);
  }

  private create(player: CreatePlayerDto): Player {
    const { email, phone, playerPicture, name } = player;
    const createdPlayer: Player = {
      _id: randomUUID(),
      email,
      name,
      phone,
      playerPicture,
      raking: 'A',
      rakingPosition: '1',
    };
    this.players.push(createdPlayer);
    return createdPlayer;
  }
}
