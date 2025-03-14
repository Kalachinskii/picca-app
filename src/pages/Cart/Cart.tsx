import { Link } from "react-router-dom";

export function Cart() {
    return (
        <>
            Корзина
            <div>
                {/* в непровайдера использовать Link нельзя */}
                {/* по сути говорит что это не внешний переход */}
                {/* потому и не перезагружает страницу в отл от <а />*/}
                <Link to="/">Меню</Link>
                <Link to="/cart">Корзина</Link>
            </div>
        </>
    );
}
