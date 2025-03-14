import styles from "./Heading.module.css";
import { HeadlingProps } from "./Heading.props";
import cn from "classnames";

export default function Heading({
    children,
    className,
    ...props
}: HeadlingProps) {
    return (
        <h1 className={cn(className, styles["h1"])} {...props}>
            {children}
        </h1>
    );
}
