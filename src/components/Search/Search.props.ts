import { InputHTMLAttributes } from "react";
// InputHTMLAttributes: Это обобщённый интерфейс (дженерик), который находится в библиотеке React
// Он представляет собой типичные атрибуты HTML-элемента как value, onChange, placeholder, и т.д.
//
// HTMLInputElement — это интерфейс в TypeScript, который представляет элемент <input />
// Он также включает в себя методы для работы с элементами ввода, focus(), blur(), select() и т.д.
export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
    isValid?: boolean;
}
