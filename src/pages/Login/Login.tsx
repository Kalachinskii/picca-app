import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Heading from "../../components/Heading/Heading";
import Input from "../../components/Input/Input";
import styles from "./Login.module.css";
import { FormEvent } from "react";

export function Login() {
    const submit = (event: FormEvent) => {
        event.preventDefault();
        console.log(event);
    };

    return (
        <div className={styles.login} onSubmit={submit}>
            <Heading>Вход</Heading>
            <form className={styles.form}>
                <div className={styles.field}>
                    <label htmlFor="email">Ваш email</label>
                    <Input id="email" placeholder="Email" />
                </div>
                <div className={styles.field}>
                    <label htmlFor="password">Ваш password</label>
                    <Input id="password" placeholder="password" />
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
