/* eslint-disable prettier/prettier */
import {
  Body,
  Controller, Get, Post
} from '@nestjs/common';
import { CreatePlayerDto } from './interfaces/dtos/create-player.dto';
import { PlayersService } from './players.service';

@Controller('api/players')
export class PlayersController {
  constructor(private readonly PlayersServices: PlayersService) {}

  @Post()
  async createOrUpdatePlayer(@Body() player: CreatePlayerDto) {
    const user = await this.PlayersServices.createOrUpdatePlayer(player);
    return JSON.stringify(user);
  }

  @Get()
  async getAllPlayers(@Body('email') email?: string) {
    if (email) {
      return this.PlayersServices.findPlayerOrFail(email);
    }
    return JSON.stringify(await this.PlayersServices.getAllPlayers());
  }

  @Post()
  async deletePlayer(@Body('email') email: string) {
    await this.PlayersServices.deletePlayer(email)
    return 'ok'
  }
}
