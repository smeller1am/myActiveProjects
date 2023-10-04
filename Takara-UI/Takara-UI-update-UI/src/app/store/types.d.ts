import store from '@/app/store/index';

declare type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
