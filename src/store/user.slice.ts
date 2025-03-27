import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "./storage";

export const JWT_PERSISTENT_STATE = "userData";
// что хранить
export interface UserState {
    jwt: string | null;
}

export interface UserPersistentState {
    jwt: string | null;
}

const initialState: UserState = {
    jwt: loadState<UserPersistentState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
};

export const userSlice = createSlice({
    name: "user",
    // начальное значение
    initialState,
    reducers: {
        // state - пред состояние
        // action.payload - переданная строка
        addJwt: (state, action: PayloadAction<string>) => {
            state.jwt = action.payload;
        },
        logout: (state) => {
            state.jwt = null;
        },
    },
});

export default userSlice.reducer;
// в userActions - будут методы addJwt / logout
// использование - userActions.addJwt() см. Login
export const userActions = userSlice.actions;
