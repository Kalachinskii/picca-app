import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';
import { InputProps } from './Input.props';

// ref - исправляем ошибку добовляя джинерик <HTMLInputElement>
// forwardRef - принемает 2 параметра,
// 1. HTMLInputElement - тот элемент на который мы реферимся
// 2. InputProps - описание пропса(interface) - позволит добовлять placholder и т.п. в компонент (уровень выше)
const Input = forwardRef<HTMLInputElement, InputProps>(function Input( {className, isValid = true, ...props}, ref) {
    return (
        <input 
            ref={ref}
            {...props}
            className={
                cn(styles['input'], className, styles['input'], {
                    [styles['invalid']]: isValid,
                    // [styles['input-title']]: appearence === 'title'
            })}/>
    )
})

export default Input