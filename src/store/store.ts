import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth/AuthSlice';
import employeeReducer from './reducers/employee/UserSlice';
import crumbReducer from './reducers/breadcrumb/CrumbSlice';

const rootReducer = combineReducers({
  authReducer,
  employeeReducer,
  crumbReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
