/* Here is where global sagas are added, Sagas that are created at app start */

export function* initSagas() {
  // Watchers can spawn cascading updates
  // yield all([watchSignUp].map(spawnSaga));
  // One time updates (independent) using spawn, run saga at program start
  // yield spawn(/*SLICE SAGA*/)
}
