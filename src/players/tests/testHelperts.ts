import { CreatePlayerDto } from '../interfaces/dtos/create-player.dto';
import { IPlayer } from '../interfaces/player';
import { PlayersService } from '../players.service';

export const generateUser = (): CreatePlayerDto => ({
  email: 'hell@theHell.com',
  name: 'Hell without I of indigo',
  phone: 'who cares?',
  playerPicture: '',
});

export const createAPlayer = async (): Promise<IPlayer> => {
  const player = await new PlayersService().createOrUpdatePlayer(
    generateUser(),
  );
  return player;
};
