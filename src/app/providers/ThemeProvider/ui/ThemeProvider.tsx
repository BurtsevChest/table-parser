import React, { useEffect, useMemo, useState } from "react";
import { ThemeContext, Theme } from "../lib/ThemeContext";

interface IThemeProvider {
   children: React.ReactNode;
}

const ThemeProvider: React.FC<IThemeProvider> = ({children}) => {
   const [theme, setTheme] = useState<Theme>('dark');
   
   useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
   }, [theme]);

   const defaultProps = useMemo(
      () => {
         return {
            theme,
            setTheme
         }
      },
      [theme]
   );

   return (
      <ThemeContext.Provider value={defaultProps}>
         {children}
      </ThemeContext.Provider>
   );
}

export default ThemeProvider;
