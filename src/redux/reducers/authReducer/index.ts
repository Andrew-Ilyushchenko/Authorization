import { Reducer } from "redux";

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

const authReducer: Reducer<IInitialAuthState ,any> = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default authReducer;