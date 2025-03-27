import { createSlice } from "@reduxjs/toolkit";

// что хранить
export interface UserState {
    jwt: string | null;
}

const initialState: UserState = {
    jwt: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // state - пред состояние
        addJwt: (state) => {
            state.jwt = "asdasdasd";
        },
        logout: (state) => {
            state.jwt = null;
        },
    },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
