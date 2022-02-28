import { Body, Controller, Post } from '@nestjs/common';
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
}
