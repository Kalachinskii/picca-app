import { useParams } from "react-router-dom";

export function Product() {
    // достаём из url всё что после product/
    const { id } = useParams();

    return <>Продукт - {id}</>;
}
