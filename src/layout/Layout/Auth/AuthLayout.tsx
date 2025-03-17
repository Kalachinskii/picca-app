import { Outlet } from "react-router-dom";
import styles from "./AuthLayout.module.css";

export function AuthLayout() {
    return (
        <div className={styles.layout}>
            <div className={styles.logo}>
                <img src="/Logo.svg" alt="Логотим Компании" />
            </div>

            <div className={styles.content}>
                {/* область контента дочерних роутев */}
                <Outlet />
            </div>
        </div>
    );
}
