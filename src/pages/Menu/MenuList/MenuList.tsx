import ProductCard from "../../../components/ProductCard/ProductCard";
import { MenuListProps } from "./MenuList.props";

export function MenuList({ products }: MenuListProps) {
    return products.map((product) => (
        <ProductCard
            key={product.id}
            id={product.id}
            title={product.name}
            description={product.ingredients.join(", ")}
            price={product.price}
            rating={product.reating}
            image={product.image}
        />
    ));
}
