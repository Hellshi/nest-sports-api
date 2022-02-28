import { Test, TestingModule } from '@nestjs/testing';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { PlayersController } from './players.controller';

describe('PlayersController', () => {
  let controller: PlayersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayersController],
    }).compile();

    controller = module.get<PlayersController>(PlayersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be called with correct values', async () => {
    const user: CreatePlayerDto = {
      email: 'hell@theHell.com',
      name: 'Hell without I of indigo',
      phone: 'who cares?',
      playerPicture: '',
    };
    const createOrUpdateSpy = jest.spyOn(controller, 'createOrUpdatePlayer');
    const response = await controller.createOrUpdatePlayer(user);
    expect(createOrUpdateSpy).toHaveBeenCalledWith(user);
  });
});
