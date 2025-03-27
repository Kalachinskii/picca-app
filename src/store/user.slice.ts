import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// что хранить
export interface UserState {
    jwt: string | null;
}

const initialState: UserState = {
    jwt: null,
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
