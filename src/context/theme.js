import React, { useState } from 'react';

// create the context
const ThemeContext = React.createContext();

// create a provider component
function ThemeHandler({ children }) {
    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    const [theme, setTheme] = useState("dark");

    return (
        <ThemeContext.Provider 
            value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeHandler }