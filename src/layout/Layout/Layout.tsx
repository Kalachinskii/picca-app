import {
    Link,
    NavLink,
    Outlet,
    useLocation,
    useNavigate,
} from "react-router-dom";
import styles from "./Layout.module.css";
import Button from "../../components/button/Button";
import { useEffect } from "react";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { AppDispath } from "../../store/store";
import { userActions } from "../../store/user.slice";

export function Layout() {
    // показывает где мы находимся
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispath>();

    const logout = () => {
        // localStorage.removeItem("jwt");
        dispatch(userActions.logout());
        navigate("/auth/login");
    };

    useEffect(() => {
        console.log(location);
        // {pathname: '/', search: '', hash: '', state: null, key: '4nl451ry'}
        // {pathname: '/cart', search: '', hash: '', state: null, key: 'thhuh10x'}
    }, [location]);

    return (
        <div className={styles.layout}>
            <div className={styles.sidebar}>
                <div className={styles.user}>
                    <img
                        className={styles.avatar}
                        src="/avatar.png"
                        alt="аватарка пользовотеля"
                    />
                    <div className={styles.name}>Калачинский Владислав</div>
                    <div className={styles.email}>
                        kalachinskiivlad@gmail.com
                    </div>
                </div>
                <div className={styles.menu}>
                    {/* в непровайдера использовать Link нельзя */}
                    {/* по сути говорит что это не внешний переход */}
                    {/* потому и не перезагружает страницу в отл от <а />*/}
                    <NavLink
                        to="/"
                        // isPending - неактивен
                        // isActive - активен
                        className={({ isActive }) =>
                            cn(styles.link, {
                                [styles.active]: isActive,
                            })
                        }
                    >
                        <img src="/menu-icon.svg" alt="Иконка меню" />
                        Меню
                    </NavLink>
                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            cn(styles.link, { [styles.active]: isActive })
                        }
                    >
                        <img src="/cart-icon.svg" alt="Иконка корзины" />
                        Корзина
                    </NavLink>
                </div>
                <Button className={styles.exit} onClick={logout}>
                    <img src="/exit-icon.svg" alt="иконка выхода" />
                    Выход
                </Button>
            </div>

            <div className={styles.content}>
                {/* область контента дочерних роутев */}
                <Outlet />
            </div>
        </div>
    );
}
