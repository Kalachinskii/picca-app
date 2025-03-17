import { Await, useLoaderData } from "react-router-dom";
import { IProduct } from "../Menu/product.interface";
import { Suspense } from "react";

export function Product() {
    // достаём из url всё что после product/
    // const { id } = useParams();
    // const data = useLoaderData() as IProduct;

    // defer
    // приходит {[{}]} - бд возвращает некоректно [{}] - потому { data: IProduct[] }
    const data = useLoaderData() as { data: IProduct[] };
    console.log(data);
    /*
    {data {...}}
        data {data: Array(1), status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
        [[Prototype]] Object
    */

    return (
        <>
            {/* пока не получены данные надо что то показать */}
            <Suspense fallback={"Загружаю..."}>
                {/* компонент обеспечивающий реализацию Suspas с API и правельную загрузку*/}
                {/* отрисуеться когда придут данные */}
                <Await
                    // ждём решения промисса с данными
                    resolve={data.data}
                >
                    {/* после получения получаем результирующий элемент */}
                    {/* проблема в том что возвращаеться [{продукт}] */}
                    {/* вытаскиваем массив рбъектов из обекта через деструктизацию */}
                    {/* попутно указываем тип данных */}
                    {({ data }: { data: IProduct[] }) => (
                        <>Продукт - {data[0].name}</>
                    )}
                </Await>
            </Suspense>
        </>
    );
}
