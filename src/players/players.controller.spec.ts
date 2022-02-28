import { Test, TestingModule } from '@nestjs/testing';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';

describe('PlayersController', () => {
  let controller: PlayersController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlayersController],
      providers: [PlayersService],
    }).compile();

    controller = module.get<PlayersController>(PlayersController);
  });

  const generateUser = (): CreatePlayerDto => ({
    email: 'hell@theHell.com',
    name: 'Hell without I of indigo',
    phone: 'who cares?',
    playerPicture: '',
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
});
