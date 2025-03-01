// import './button.css';
import { FC } from "react";
import { ButtonProps } from "./Button.props"
import cn from 'classnames';

// АЛЬТЕРНАТИВНАЯ ЗАПИСЬ Button
// FC - являеться функциональным компанентом с пропсами <ButtonProps>
export const ButtonAlt: FC<ButtonProps> = ({className, children, ...props}) => {
    return (
        <button className={cn('button accent', className)} {...props}>{children}</button>
    )
}

function Button({children, className, ...props}: ButtonProps) {
    return (
        <button className={cn('button accent', className)} {...props}>{children}</button>
    )
}

export default Button