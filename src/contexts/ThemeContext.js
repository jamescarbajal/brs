import { createContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeContext = createContext("light");

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState("Light");
    const toggleTheme = () => {
        setTheme(theme === "Light" ? "Dark" : "Light");
    };

    return (
        <ThemeContext.Provider value = {{ theme, toggleTheme }}>
            <StyledThemeProvider theme = {{ theme }}>
                {props.children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider };