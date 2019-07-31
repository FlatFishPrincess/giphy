import { put, call, takeEvery, all, select } from 'redux-saga/effects';

export const getSearInput = (state) => state.search

function* fetchGiphy() {
  yield put({ type: 'STARTED_SEARCH_FETCH' });
  const searchInput = yield select(getSearInput);
  const result = yield call(fetchURL, searchInput);
  yield put({ type: 'DONE_SEARCH_FETCH', fetched_result: result });
}

async function fetchURL(searchInput) {
  const result = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=lw3sofGHI7Zsdh6KCr3Hn1pw78ZNOqHE&q=${searchInput}`)
                      .then(res => res.json());
  return result;
}

function* whatchSearchAsync() {
  yield takeEvery('STARTED_SEARCH', fetchGiphy)
}

export default function* rootSaga() {
  yield all([
    whatchSearchAsync()
  ]);
}
