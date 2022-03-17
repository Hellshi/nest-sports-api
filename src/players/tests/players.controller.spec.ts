/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userEntity } from '../../database/entities/user.entity';
import { CreatePlayerDto } from '../interfaces/dtos/create-player.dto';
import { PlayersController } from '../players.controller';
import { PlayersService } from '../players.service';
import { generateUser } from './testHelperts';

describe('PlayersController', () => {
  let controller: PlayersController;
  let playersServices: PlayersService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayersController],
      providers: [PlayersService],
      imports: [TypeOrmModule.forFeature([userEntity])],
    }).compile();

    controller = module.get<PlayersController>(PlayersController);
    playersServices = module.get<PlayersService>(PlayersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be called with correct values', async () => {
    const user: CreatePlayerDto = generateUser();
    const createOrUpdateSpy = jest.spyOn(controller, 'createOrUpdatePlayer');
    await controller.createOrUpdatePlayer(user);
    expect(createOrUpdateSpy).toHaveBeenCalledWith(user);
  });

  it('should update an array of players on success', async () => {
    const players = await controller.getAllPlayers();
    expect(players).toBeTruthy();
  });

  it('should throw when an unknow email is provides', async () => {
    try {
      await controller.getAllPlayers('helltheHell@hell.com');
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
    }
  });
  it('should throw when an unknow email is provides', async () => {
    try {
      await controller.deletePlayer('helltheHell@hell.com');
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
    }
  });

  it('should return truthy when an existing email is provided', async () => {
    const player = await playersServices.createOrUpdatePlayer(generateUser());
    const response = await controller.deletePlayer(player.email);
    expect(response).toBe('ok');
  });
});
