import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import counterReducer from '../reducers/counterReducer';
import fetchData from '../reducers/fetchData';
import { watcherSaga } from "../sagas/sagas";

const reducer = combineReducers({
    counter: counterReducer,
    data: fetchData
});

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(watcherSaga)

export default store