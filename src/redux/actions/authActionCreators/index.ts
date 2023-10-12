import { IAuthRequestLoginData } from '../../../types/authTypes';
import { InferActionTypes } from '../../store';
import { AUTH_LOADING, LOGIN } from '../actions';

export const authActionCreators = {
    getLogin: (loginData: IAuthRequestLoginData) => {
        return{
            type: LOGIN,
            payload: loginData, 
        }
    },
    setAuthLoading: (isLoading: boolean) => {
        return {
            type: AUTH_LOADING,
            payload: isLoading,
        }
    }
}

export type AuthActionType = InferActionTypes<typeof authActionCreators>;
