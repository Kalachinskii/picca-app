import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { defer } from "react-router-dom";
// import { Menu } from "./pages/Menu/Menu";
import { Cart } from "./pages/Cart/Cart";
import { Error } from "./pages/Error/Error";
import { Layout } from "./layout/Layout/Layout.tsx";
import { Product } from "./pages/Product/Product.tsx";
import axios from "axios";
import { PREFIX } from "./helpers/API.ts";
import { AuthLayout } from "./layout/Layout/Auth/AuthLayout.tsx";
import { Login } from "./pages/Login/Login.tsx";
import { Register } from "./pages/Register/Register.tsx";
import { RequireAuth } from "./helpers/RequireAuth.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

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
        element: (
            // проверка на авторизацию
            // куда не зайди будет перебрасывать на авторизацию
            <RequireAuth>
                <Layout />
            </RequireAuth>
        ),
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
                //
                // используем loader при зависимости от поступающего парметра id=1
                // и больше не от чего (нет до зависимостей от состояний)
                //  + надо загрущить все данные
                loader: async ({ params }) => {
                    // позволяет обвернуть асинхронные данные
                    // с v6 работает npm npm i react-router-dom@6.4
                    // defer - обеспечивает отложенную загрузку с API
                    // с помощью suspense
                    return defer({
                        // .get - возвращаем промис
                        // .then - возвращам данные
                        // по итогу возвращаем промисы которые должны быть загружены
                        // загрузка обеспечиваеться через компонент <Await>
                        data: await axios
                            .get(`${PREFIX}/menu/?id=${params.id}`)
                            .then((data) => data),
                    });
                    // const { data } = await axios.get(
                    //     `${PREFIX}/menu/?id=${params.id}`
                    // );
                    // mockapi.io - возвращает массивом [{...}] = избавляемся от []
                    // return data[0];
                },
            },
        ],
    },
    {
        path: "/auth",
        // отдельный лаяут на регистрацию отделенный от основной страницы
        element: <AuthLayout />,
        // и 2 страницы
        // вся вёрстка детей element: <></>, подставяться в <Outlet />
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
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
        {/* центрилизованное хранилище на всё приложение*/}
        <Provider store={store}>
            {/* подключаем роутер */}
            <RouterProvider router={router} />
        </Provider>
        {/* <App /> */}
    </StrictMode>
);
