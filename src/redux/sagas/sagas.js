import {takeLatest} from 'redux-saga/effects';
import { handleGetData } from './handlers/data';

export function* watcherSaga() {
    yield takeLatest('GET_DATA', handleGetData)
}