import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePlayerDto } from './interfaces/dtos/create-player.dto';
import { IPlayer } from './interfaces/player';

@Injectable()
export class PlayersService {
  private players: IPlayer[] = [];

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

  private create(player: CreatePlayerDto): IPlayer {
    const { email, phone, playerPicture, name } = player;
    const createdPlayer: IPlayer = {
      id: 1,
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
