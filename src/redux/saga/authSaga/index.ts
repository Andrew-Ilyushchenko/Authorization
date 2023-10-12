import { all, takeLatest, put } from 'redux-saga/effects';
import { LOGIN } from '../../actions/actions';
import { authActionCreators } from '../../actions/authActionCreators';

function* fetchLogin ({payload: { email, password }}: any) {
    try {
        yield put(authActionCreators.setAuthLoading(true));
    } catch(e) { 

    } finally {
        yield put(authActionCreators.setAuthLoading(false));
    }
}

export function* authSaga() {
    yield all([takeLatest(LOGIN, fetchLogin)])
}