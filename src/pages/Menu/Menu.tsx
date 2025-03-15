import Heading from "../../components/Heading/Heading";
import ProductCard from "../../components/ProductCard/ProductCard";
import Search from "../../components/Search/Search";
import { PREFIX } from "../../helpers/API";

import styles from "./Menu.module.css";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { MenuList } from "./MenuList/MenuList";
import { IProduct } from "./product.interface";

export function Menu() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>();

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
            const { data } = await axios.get<IProduct[]>(`${PREFIX}/menu`);
            setProducts(data);
            setIsLoading(false);
        } catch (e) {
            console.error(e);
            if (e instanceof AxiosError) {
                setError(e.message);
            }
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
                {error && <>{error}</>}
                {!isLoading && <MenuList products={products} />}
                {isLoading && <>Loading....</>}
            </div>
        </>
    );
}
