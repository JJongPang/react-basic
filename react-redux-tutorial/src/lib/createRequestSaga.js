import { call, put } from 'redux-saga/effects';
import { finishLoading, startLoading } from '../module/loading';

export default function createRequestSaga(type, request) {
    const SUCCES = `${type}_SUCCES`;
    const FAILURE = `${type}_FAILURE`;
    return function* (action) {
        yield put(startLoading(type)); //로딩 시작
        try {
            const response = yield call(request, action.payload);
            yield put({
                type: SUCCES,
                payload: response.data,
            });
        } catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: true,
            });
        }
        yield put(finishLoading(type)); //로딩 끝
    };
}
