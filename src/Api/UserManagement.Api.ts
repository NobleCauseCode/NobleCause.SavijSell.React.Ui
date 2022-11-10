import { User } from '../Models/User';
import { getApiClient } from './Engine';

export const signupUser = async (user: User): Promise<void> => {
  try {
    const client = getApiClient();
    await client.post('api/users', user);
  } catch (error) {
    throw error;
  }
};
