import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';
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
  async getAllPlayers() {
    return JSON.stringify(await this.PlayersServices.getAllPlayers());
  }
}
