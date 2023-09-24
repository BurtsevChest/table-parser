import { useContext } from "react";
import { Theme, ThemeContext } from "./ThemeContext";

/**
 * Кастомный хук, возвращающий обьект {theme, setNewTheme} из контекста ThemeProvider. 
 * @theme текущая цветовая тема
 * @setNewTheme функция, для изменения цветовой темы, 
 */
export const useTheme = () => {
   const {theme, setTheme} = useContext(ThemeContext);
   const setNewTheme = (newTheme: Theme) => {
      setTheme?.(newTheme);
   }

   return {
      theme,
      setNewTheme
   }
}
