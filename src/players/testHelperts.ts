import { CreatePlayerDto } from './dtos/create-player.dto';

export const generateUser = (): CreatePlayerDto => ({
  email: 'hell@theHell.com',
  name: 'Hell without I of indigo',
  phone: 'who cares?',
  playerPicture: '',
});
