/* eslint-disable prettier/prettier */
import {
  Body,
  Controller, Delete, Get, Param, Post, Put, Query, UsePipes, ValidationPipe
} from '@nestjs/common';
import { CreatePlayerDto } from './interfaces/dtos/create-player.dto';
import { playerValidatorPipe } from './pipes/validate.player.pipe';
import { PlayersService } from './players.service';

@Controller('api/players')
export class PlayersController {
  constructor(private readonly PlayersServices: PlayersService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createPlayer(@Body() player: CreatePlayerDto) {
      const user = await this.PlayersServices.createPlayer(player);
      return JSON.stringify(user);
  }

  @Put()
  @UsePipes(ValidationPipe)
  async updatePlayer(@Body() player: CreatePlayerDto) {
      const user = await this.PlayersServices.updatePlayer(player);
      return JSON.stringify(user);
  }

  @Get()
  async getAllPlayers() {
      return JSON.stringify(await this.PlayersServices.getAllPlayers());
  }

  @Get('/:id')
  async getPlayerById(@Param('id', playerValidatorPipe) id?: number) {
    return this.PlayersServices.findPlayerOrFail(id);
  }

  @Delete()
  @UsePipes(ValidationPipe)
  async deletePlayer(@Query('id', playerValidatorPipe) id: number) {
      await this.PlayersServices.deletePlayer(id)
      return 'ok'
  }
}
