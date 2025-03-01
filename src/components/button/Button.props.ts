import { ButtonHTMLAttributes, ReactNode } from "react";

// ButtonHTMLAttributes - интерфейс всех атрибутов кнопки
// Убераем ошибку через джинерик ButtonHTMLAttributes наследуеться от HTMLButtonElement
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // ReactNode - это набор всех возможных значений, возвращаемых компонентом.
    children: ReactNode
    // каждый эвент неактуально прописывать - долго
    // onClick: () => void;
}