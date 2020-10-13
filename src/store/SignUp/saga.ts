import { put, select, call } from 'redux-saga/effects';
import { selectStep } from './selectors';
import { actions } from './slice';

export function* updateSignUp() {
  console.log('Fetching User State');

  // Define API
  const api = create({
    baseURL: 'https://localhost:5001/api/',
  });

  // start making calls
  api
    .get('/repos/skellock/apisauce/commits')
    .then(response => response.data[0].commit.message)
    .then(console.log);

  // customizing headers per-request
  api.post('/users', { name: 'steve' }, { headers: { 'x-gigawatts': '1.21' } });

  yield put(actions.decrementStep());
}
