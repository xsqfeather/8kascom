import axios from 'axios';

export async function createSession(params: { username: string; password: string }) {
  const { username, password } = params;
  const { data } = await axios.post('/api/sessions', {
    username,
    password,
  });
  localStorage.setItem('access_token', data.token);
  return data;
}
