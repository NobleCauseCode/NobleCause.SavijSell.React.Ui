import { getApiClient } from './Engine';
import { Product } from '../Models/Product';

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const client = getApiClient();
    const response = await client.get<Product[]>('api/products');
    return response.data;
  } catch (error) {
    throw error;
  }
};
