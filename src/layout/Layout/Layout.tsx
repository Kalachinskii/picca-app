import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.css";
import Button from "../../components/button/Button";
import { useEffect } from "react";
import cn from "classnames";

export function Layout() {
    // показывает где мы находимся
    const location = useLocation();

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
                    <Link
                        to="/"
                        className={cn(styles.link, {
                            [styles.active]: location.pathname == "/",
                        })}
                    >
                        <img src="/menu-icon.svg" alt="Иконка меню" />
                        Меню
                    </Link>
                    <Link to="/cart" className={styles.link}>
                        <img src="/cart-icon.svg" alt="Иконка корзины" />
                        Корзина
                    </Link>
                </div>
                <Button className={styles.exit}>
                    <img src="/exit-icon.svg" alt="иконка выхода" />
                    Выход
                </Button>
            </div>

            <div>
                {/* область контента дочерних роутев */}
                <Outlet />
            </div>
        </div>
    );
}
