import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { Player } from './interfaces/player';

@Injectable()
export class PlayersService {
  private players: Player[] = [];

  async findPlayerOrFail(email: string): Promise<Player> {
    const player = await this.findPlayer(email);
    if (!player) {
      throw new NotFoundException(`Not found player`);
    }
    return player;
  }

  async findPlayer(email: string): Promise<Player | undefined> {
    const player = this.players.filter((player) => player.email === email);
    return player[0];
  }

  async createOrUpdatePlayer(player: CreatePlayerDto): Promise<Player> {
    const Existingplayer = await this.findPlayer(player.email);
    if (!Existingplayer) {
      return this.create(player);
    }
    return this.updatePlayer(Existingplayer, player);
  }

  private updatePlayer(oldPlayer: Player, newPlayer: CreatePlayerDto) {
    return { ...oldPlayer, ...newPlayer };
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

  async getAllPlayers(): Promise<Player[]> {
    return this.players;
  }

  async deletePlayer(email: string): Promise<Player[]> {
    await this.findPlayerOrFail(email);
    const newplayers = this.players.filter((player) => player.email !== email);
    this.players = newplayers;
    return this.players;
  }
}
