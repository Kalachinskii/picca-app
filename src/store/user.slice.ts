import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "./storage";
import { LoginResponse } from "../interface/auth.interface";
import axios, { AxiosError } from "axios";
import { PREFIX } from "../helpers/API";

export const JWT_PERSISTENT_STATE = "userData";
// что хранить
export interface UserState {
    jwt: string | null;
    loginErrorMessage?: string;
}

export interface UserPersistentState {
    jwt: string | null;
}

const initialState: UserState = {
    jwt: loadState<UserPersistentState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
};

// обвёртка асинхронной вункции делая синхронной
export const login = createAsyncThunk(
    "user/login",
    async (params: { email: string; password: string }) => {
        // try {
        const { data } = await axios.post<LoginResponse>(
            `${PREFIX}/auth/login`,
            {
                email: params.email,
                password: params.password,
            }
        );
        return data;
        // } catch (e) {
        //     if (e instanceof AxiosError) {
        //         throw new Error(e.response?.data.message);
        //     }
        // }
    }
);

export const userSlice = createSlice({
    name: "user",
    // начальное значение
    initialState,
    reducers: {
        // state - пред состояние
        // action.payload - переданная строка
        // addJwt: (state, action: PayloadAction<string>) => {
        //     state.jwt = action.payload;
        // },
        // нельзя зделать асинхронным
        // решен ие через пеерходник
        logout: (state) => {
            state.jwt = null;
        },
        clearLoginError: (state) => {
            state.loginErrorMessage = undefined;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(
            login.fulfilled,
            (state, action: PayloadAction<LoginResponse>) => {
                // if (!action.payload) {
                //     return;
                // }
                state.jwt = action.payload.access_token;
            }
        );
        builder.addCase(login.rejected, (state, action) => {
            // console.log(action.error.message);
            state.loginErrorMessage = action.error.message;
        });
    },
});

export default userSlice.reducer;
// в userActions - будут методы addJwt / logout
// использование - userActions.addJwt() см. Login
export const userActions = userSlice.actions;
