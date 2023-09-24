import { createContext } from "react";

export type Theme = 'light' | 'dark';

export interface IThemeContextProps {
   theme?: Theme;
   setTheme?: (newTheme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});
