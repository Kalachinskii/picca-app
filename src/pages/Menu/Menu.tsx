import Heading from "../../components/Heading/Heading";
import ProductCard from "../../components/ProductCard/ProductCard";
import Search from "../../components/Search/Search";
import { PREFIX } from "../../helpers/API";
import { Products } from "./products.interface";
import styles from "./Menu.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export function Menu() {
    const [products, setProducts] = useState<Products[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // const getMenu = async () => {
    //     try {
    //         const res = await fetch(`${PREFIX}/menu`);
    //         if (!res.ok) {
    //             return;
    //         }
    //         const data = (await res.json()) as Products[];
    //         setProducts(data);
    //     } catch (e) {
    //         console.error(e);
    //         return;
    //     }
    // };

    //                          AXIOS
    // npm i axios
    const getMenu = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get<Products[]>(`${PREFIX}/menu`);
            setProducts(data);
            setIsLoading(false);
        } catch (e) {
            console.error(e);
            setIsLoading(false);
            return;
        }
    };

    useEffect(() => {
        getMenu();
    }, []);

    return (
        <>
            <div className={styles.head}>
                <Heading>Меню</Heading>
                <Search placeholder="Введите блюдо или состав" />
            </div>
            <div>
                {!isLoading &&
                    products.map((product) => (
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
                {isLoading && <>Loading....</>}
            </div>
        </>
    );
}
