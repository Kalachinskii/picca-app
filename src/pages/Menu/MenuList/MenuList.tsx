import ProductCard from "../../../components/ProductCard/ProductCard";
import { MenuListProps } from "./MenuList.props";
import styles from "./MenuList.module.css";

export function MenuList({ products }: MenuListProps) {
    return (
        <div className={styles.wrapper}>
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.name}
                    description={product.ingredients.join(", ")}
                    price={product.price}
                    rating={product.reating}
                    image={product.image}
                />
            ))}
        </div>
    );
}
