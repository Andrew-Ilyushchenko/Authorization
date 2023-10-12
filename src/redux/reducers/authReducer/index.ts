import { Reducer } from "redux";
import { AuthActionType } from "../../actions/authActionCreators";

interface IInitialAuthState {
    data: any,
    isLoading: boolean,
    error: null | string,
    isAuth: Boolean
}

const initialState: IInitialAuthState = {
    data: {},
    isLoading: false,
    error: null,
    isAuth: false
}

const authReducer: Reducer<IInitialAuthState , AuthActionType> = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default authReducer;