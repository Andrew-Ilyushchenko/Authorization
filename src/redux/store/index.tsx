import { createStore, compose, PreloadedState, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from '../saga';

const sagasMiddleware = createSagaMiddleware();

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = (preloadedState: PreloadedState<{}>) => (
    createStore(
        rootReducer, 
        preloadedState,
        composeEnhancers(applyMiddleware(sagasMiddleware)),
    )
);

sagasMiddleware.run(rootSaga);

const store = configureStore({});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionTypes<T extends { [key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>

export default store;
