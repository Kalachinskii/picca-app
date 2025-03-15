import { useLoaderData, useParams } from "react-router-dom";
import { IProduct } from "../Menu/product.interface";

export function Product() {
    // достаём из url всё что после product/
    // const { id } = useParams();
    const data = useLoaderData() as IProduct;

    return <>Продукт - {data.name}</>;
}
