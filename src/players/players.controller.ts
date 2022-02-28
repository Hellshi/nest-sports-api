import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create-player.dto';

@Controller('api/players')
export class PlayersController {
  @Post()
  async createOrUpdatePlayer(@Body() player: CreatePlayerDto) {
    const user = player;
    return JSON.stringify({
      user,
    });
  }
}
