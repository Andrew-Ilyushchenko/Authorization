import { InferActionTypes } from '../../store';
import { AUTH_LOADING } from '../actions';

export const authActionCreators = {
    setAuthLoading: (isLoading: boolean) => {
        return {
            type: AUTH_LOADING,
            payload: isLoading,
        }
    }
}

export type AuthActionTypes = InferActionTypes<typeof authActionCreators>;
