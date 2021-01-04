import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

//export default ThemeContext;

const ThemeContextProvider = (props) => {

    const [lightTheme, setLightTheme] = useState(false);
  
    

    const toggleTheme = () => {
        setLightTheme(!lightTheme);
    }

    const { children } = props;

    

        return (
           <ThemeContext.Provider value ={{ lightTheme, toggleTheme }}>
             {children}
           </ThemeContext.Provider>
        );
    
}

export default ThemeContextProvider;