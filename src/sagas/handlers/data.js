import {call, put} from 'redux-saga/effects';
import { SET_DATA } from '../../actions'
import { getRequest } from '../requests/data'

export function* handleGetData(action){
    try{
        const response = yield call(getRequest)
        const {data} = response
        yield put(SET_DATA(data))
    }catch(error){
        console.log(error)
    }
}