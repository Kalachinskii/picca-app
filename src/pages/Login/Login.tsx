import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Heading from "../../components/Heading/Heading";
import Input from "../../components/Input/Input";
import styles from "./Login.module.css";
import { FormEvent, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { PREFIX } from "../../helpers/API";
import { LoginResponse } from "../../interface/auth.interface";
import { useDispatch, useSelector } from "react-redux";
import { AppDispath, RootState } from "../../store/store";
import { login, userActions } from "../../store/user.slice";

export type LoginForm = {
    email: {
        value: string;
    };
    password: {
        value: string;
    };
};

export function Login() {
    const [error, setError] = useState<string | null>();
    const navigate = useNavigate();
    // хук обеспечивает вызов диспеча
    const dispatch = useDispatch<AppDispath>();
    const { jwt, loginErrorMessage } = useSelector((s: RootState) => s.user);
    // const loginErrorMessage = useSelector(
    //     (s: RootState) => s.user.loginErrorMessage
    // );

    useEffect(() => {
        if (jwt) {
            navigate("/");
        }
    }, [jwt, navigate]);

    const submit = async (event: FormEvent) => {
        event.preventDefault();
        // setError(null);
        dispatch(userActions.clearLoginError());
        // получение данных с формы
        // const email = event.target.email.value;
        // будет тип event.target и тип LoginForm
        const target = event.target as typeof event.target & LoginForm;
        // const email = target.email.value;
        const { email, password } = target;
        await sendLogin(email.value, password.value);
    };

    const sendLogin = async (email: string, password: string) => {
        dispatch(login({ email, password }));
        // try {
        // ___________________________________________________
        // запрос напрвлен не по адресу - сзделать API
        // реализовываем интерфейс через джинерик
        // const { data } = await axios.post<LoginResponse>(
        //     `${PREFIX}/auth/login`,
        //     {
        //         email,
        //         password,
        //     }
        // );
        //____________________________________________________
        // data - должен получить access_token
        // console.log(data);
        //     localStorage.setItem("jwt", JSON.stringify(data.access_token));
        //     dispatch(userActions.addJwt(data.access_token));
        //     navigate("/");
        // } catch (error) {
        //     if (error instanceof AxiosError) {
        //         console.error(error.response);
        //         setError(error.response?.data.msg);
        //     }
        // }
    };

    return (
        <div className={styles.login}>
            <Heading>Вход</Heading>
            {loginErrorMessage && (
                <div className={styles.error}>{loginErrorMessage}</div>
            )}

            <form className={styles.form} onSubmit={submit}>
                <div className={styles.field}>
                    <label htmlFor="email">Ваш email</label>
                    <Input id="email" name="email" placeholder="Email" />
                </div>
                <div className={styles.field}>
                    <label htmlFor="password">Ваш password</label>
                    <Input
                        id="password"
                        name="password"
                        placeholder="password"
                    />
                </div>
                <Button appearence="big">Вход</Button>
            </form>

            <div className={styles.links}>
                <div>Нет аккаунта ?</div>
                <Link to="/auth/register">Зарегистрироваться</Link>
            </div>
        </div>
    );
}
