import Heading from "../../components/Heading/Heading";
import ProductCard from "../../components/ProductCard/ProductCard";
import Search from "../../components/Search/Search";
import styles from "./Menu.module.css";

export function Menu() {
    return (
        <>
            <div className={styles.head}>
                <Heading>Меню</Heading>
                <Search placeholder="Введите блюдо или состав" />
            </div>
            <div>
                <ProductCard
                    id={1}
                    title="Наслаждение"
                    description="Салями, руккола, помидоры, оливки"
                    price={320}
                    rating={4.3}
                    image="/img-card.png"
                />
            </div>
        </>
    );
}
