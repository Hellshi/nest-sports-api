import { Test, TestingModule } from '@nestjs/testing';
import { CreatePlayerDto } from './dtos/create-player.dto';
import { PlayersService } from './players.service';
import { generateUser } from './testHelperts';

describe('PlayersService', () => {
  let service: PlayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayersService],
    }).compile();

    service = module.get<PlayersService>(PlayersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return an user on success', async () => {
    const user: CreatePlayerDto = generateUser();
    const response = await service.createOrUpdatePlayer(user);
    expect(response.id).toBeTruthy();
  });
  it('should return an array of players on success', async () => {
    const response = await service.getAllPlayers();
    expect(response).toBeTruthy();
  });

  it('should return an updated player on success', async () => {
    const user: CreatePlayerDto = generateUser();
    const originalUser = await service.createOrUpdatePlayer(user);
    const updatedUser = {
      ...user,
      ...{ name: 'From dust to dust' },
    };
    const response = await service.createOrUpdatePlayer(updatedUser);
    expect(response.id).toBe(originalUser.id);
  });

  it('should return an array on success', async () => {
    jest.spyOn(service, 'findPlayerOrFail').mockReturnValue(
      new Promise((resolve) =>
        resolve({
          id: 'any_id',
          email: '',
          phone: '',
          rakingPosition: '1',
          raking: '',
          name: '',
          playerPicture: '',
        }),
      ),
    );

    const response = await service.deletePlayer('valid@mail.com');
    expect(response).toBeTruthy();
  });
});
