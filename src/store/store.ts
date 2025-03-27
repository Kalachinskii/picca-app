// корневое централизованное хранилище
import { configureStore } from "@reduxjs/toolkit";
import userSlice, { JWT_PERSISTENT_STATE } from "./user.slice";
import { saveState } from "./storage";
// Эта функция упрощает процесс создания Redux-хранилища,
// предоставляя удобные настройки по умолчанию
// и интеграцию с различными инструментами.

//  создаем Redux-хранилище, вызывая функцию configureStore.
export const store = configureStore({
    // reducer — пустой {} - в хранилище пока нет редьюсеров,
    // которые обрабатывали бы действия и изменяли состояние.
    reducer: {
        user: userSlice,
    },
});

// в случае изменения состояния,
store.subscribe(() => {
    saveState({ jwt: store.getState().user.jwt }, JWT_PERSISTENT_STATE);
});

// на основе текущей структуры редьюсеров позволяет TypeScript
// автоматически выводить тип состояния, что полезно
// для типизации в других частях приложения.
export type RootState = ReturnType<typeof store.getState>;
// Это позволяет нам использовать типизацию для действий,
// которые мы отправляем в хранилище, что помогает избежать
// ошибок при работе с действиями и улучшает поддержку TS.
export type AppDispath = typeof store.dispatch;

// Редьюсер (reducer) в Redux — это чистая функция, которая
// принимает текущее состояние и действие (action)
// и возвращает новое состояние. Редьюсеры являются основным
// механизмом управления состоянием в Redux и отвечают
// за обработку изменений состояния приложения.
