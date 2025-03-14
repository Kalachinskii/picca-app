import { forwardRef } from "react";
import styles from "./Search.module.css";
import cn from "classnames";
import { SearchProps } from "./Search.props";

// ref - исправляем ошибку добовляя джинерик <HTMLInputElement>
// forwardRef - принемает 2 параметра,
// 1. HTMLInputElement - тот элемент на который мы реферимся
// 2. InputProps - описание пропса(interface) - позволит добовлять placholder и т.п. в компонент (уровень выше)
const Search = forwardRef<HTMLInputElement, SearchProps>(function Input(
    { className, isValid = true, ...props },
    ref
) {
    return (
        <div className={styles["input-wrapper"]}>
            <input
                ref={ref}
                {...props}
                className={cn(styles["input"], className, styles["input"], {
                    [styles["invalid"]]: isValid,
                })}
            />
            <img className={styles.icon} src="/search.svg" alt="иконка лупы" />
        </div>
    );
});

export default Search;
