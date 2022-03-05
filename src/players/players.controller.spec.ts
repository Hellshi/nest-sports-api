import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';
import { generateUser } from './testHelperts';

describe('PlayersController', () => {
  let controller: PlayersController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayersController],
      providers: [PlayersService],
    }).compile();

    controller = module.get<PlayersController>(PlayersController);
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

  it('should return undefined when an unknow email is provides', async () => {
    try {
      await controller.getAllPlayers('helltheHell@hell.com');
    } catch (e) {
      expect(e).toBeInstanceOf(NotFoundException);
    }
  });
});
