import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Menu } from "./pages/Menu/Menu";
import { Cart } from "./pages/Cart/Cart";
import { Error } from "./pages/Error/Error";
import { Layout } from "./layout/Layout/Layout.tsx";
import { Product } from "./pages/Product/Product.tsx";
import axios from "axios";
import { PREFIX } from "./helpers/API.ts";

// ЛИНИВАЯ ЗАГРУЗКА
// при build проекте снижает затратность памяти (меньше вес)
// за счёт того что разабъет файл на кусочки в данном случаее на 1 Menu
// import('./pages/Menu/Menu' - по умолчанию требует дефолтный экспорт
// 1. загружем основу
// 2. делаем подгрузку доп функционала
const Menu = lazy(() => import("./pages/Menu/Menu"));

// не загрезняем JSX
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                // не будет работать без Suspense
                // Suspense - позволяет нам зделать временный обработчик
                // пока наш компанент загружаеться
                element: (
                    <Suspense fallback={<>Загрузка...</>}>
                        <Menu />
                    </Suspense>
                ),
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                // :id - специальный индетификатор
                path: "/product/:id",
                element: <Product />,
                // если страница не загрузиться то подменит
                errorElement: <>Ошибка</>,
                // может быть асинхронной
                // https://67c45d8cc4649b9551b361e2.mockapi.io/menu/?id=1
                loader: async ({ params }) => {
                    const { data } = await axios.get(
                        `${PREFIX}/menu/?id=${params.id}`
                    );
                    // mockapi.io - возвращает массивом [{...}] = избавляемся от []
                    return data[0];
                },
            },
        ],
    },
    {
        path: "*",
        element: <Error />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* подключаем роутер */}
        <RouterProvider router={router} />
        {/* <App /> */}
    </StrictMode>
);
