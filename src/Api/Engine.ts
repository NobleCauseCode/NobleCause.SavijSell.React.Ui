import { TOKEN } from '../Constants';
import axios, { AxiosRequestConfig } from 'axios';

export function getApiClient(sendToken = true) {
  let clientConfig = { ...{ baseURL: 'https://localhost:44328/' } } as AxiosRequestConfig;
  if (sendToken) {
    const accessToken = localStorage.getItem(TOKEN);
    if (accessToken) {
      clientConfig.headers = {
        Authorization: `Bearer ${accessToken}`,
      };
    }
  }
  return axios.create(clientConfig);
}
