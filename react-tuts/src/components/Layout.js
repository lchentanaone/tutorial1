import  React, {  useContext,} from 'react';
import {ThemeContext, ThemeProvider} from './contexts/ThemeContext';

function Layout ({ startingTheme, children}) {
    return(
        <ThemeProvider startingTheme = {startingTheme}>
            <LayoutNotThemeProvider>{children}</LayoutNotThemeProvider>
        </ThemeProvider>
    )
}


function LayoutNotThemeProvider (
    { children }) {
    
    const {theme} = useContext(ThemeContext);

    return (
         
    <div className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"}>
        {children}
    </div>
    
    )
}

export default Layout; 