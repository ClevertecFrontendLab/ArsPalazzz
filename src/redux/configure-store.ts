import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import { baseApi } from './api/base-api.ts';
import { setupListeners } from '@reduxjs/toolkit/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authSlice, feedbackSlice, layoutSlice } from '@redux/reducers';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
    savePreviousLocations: 1,
});

export const store = configureStore({
    reducer: combineReducers({
        router: routerReducer,
        [baseApi.reducerPath]: baseApi.reducer,
        [authSlice.name]: authSlice.reducer,
        [layoutSlice.name]: layoutSlice.reducer,
        [feedbackSlice.name]: feedbackSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(routerMiddleware).concat(baseApi.middleware),
});

setupListeners(store.dispatch);

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
