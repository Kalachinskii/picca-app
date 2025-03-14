import { Link } from "react-router-dom";

export function Menu() {
    return (
        <>
            Меню
            <div>
                {/* в не провайдера использовать Link нельзя */}
                <Link to="/">Меню</Link>
                <Link to="/cart">Корзина</Link>
            </div>
        </>
    );
}
