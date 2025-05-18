import { type JSX } from "react";

export type Movie = {
    id?: string;
    title: string;
    originalTitle: string;
    tagline: string;
    description: string;
    posterUrl?: string;
    releaseDate: string;
    duration: string;
    status: string;
    language: string;
    budget: string;
    revenue: string;
    popularity: string;
    voteCount: string;
    rating: string;
    genres: string;
    trailerUrl: string;
}

export interface MovieDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    movie?: Movie;
}

export interface FilterProps {
    isOpen: boolean;
    onClose: () => void;
    initialDate: string;
    setInitialDate: React.Dispatch<React.SetStateAction<string>>;
    finalDate: string;
    setFinalDate: React.Dispatch<React.SetStateAction<string>>;
    filterValueDurantion: number;
    setFilterValueDurantion: React.Dispatch<React.SetStateAction<number>>;
    filterValueRating: number;
    setFilterValueRating: React.Dispatch<React.SetStateAction<number>>;
    handleFilter: () => void;
}

export interface StyledInputProps {
    width?: string;
    height?: string;
}

export interface LayoutProps {
    children: any;
}

export interface LoginModalProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}


export interface RegisterModalProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    passwordConfirm: string;
    setPasswordConfirm: React.Dispatch<React.SetStateAction<string>>;
}


export interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AuthProviderProps {
    children: any;
}

export interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
    theme: typeof lightTheme;
}

export interface CardProps {
    imageBg: string;
}

export interface RatingCircleProps {
    percentage: number;
}

export interface ProtectedRouteProps {
    children: JSX.Element;
}

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
};

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    width?: string;
    height?: string;
    label?: string;
};
