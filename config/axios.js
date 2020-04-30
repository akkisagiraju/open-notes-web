import axios from 'axios';
import { Auth } from 'aws-amplify';

axios.defaults.baseURL =
  'https://7vkxcyb6j6.execute-api.ap-south-1.amazonaws.com/test';
axios.defaults.headers.common = {
  'Content-Type': 'application/json',
};

axios.interceptors.request.use(async function (config) {
  try {
    const session = await Auth.currentSession();
    let token = session.accessToken.jwtToken;
    config.headers.common['Authorization'] = token;
    return Promise.resolve(config);
  } catch (e) {
    return Promise.resolve(config);
  }
});

export default axios;
