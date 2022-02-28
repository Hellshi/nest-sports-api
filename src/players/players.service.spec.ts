import { Test, TestingModule } from '@nestjs/testing';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { PlayersService } from './players.service';

describe('PlayersService', () => {
  let service: PlayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayersService],
    }).compile();

    service = module.get<PlayersService>(PlayersService);
  });

  const generateUser = (): CreatePlayerDto => ({
    email: 'hell@theHell.com',
    name: 'Hell without I of indigo',
    phone: 'who cares?',
    playerPicture: '',
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return an user on success', async () => {
    const user: CreatePlayerDto = generateUser();
    const response = await service.createOrUpdatePlayer(user);
    expect(response._id).toBeTruthy();
  });
});
