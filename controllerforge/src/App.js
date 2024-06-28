import React from 'react';
import './App.css';
import STLViewer from './STLViewer';
import {ThemeProvider, ThemeContext} from './ThemeContext';
import './fonts.css';

const AppContent = () => {
    const {theme, toggleTheme} = React.useContext(ThemeContext);

    return (<div style={{background: theme.primary}}>
        <button onClick={toggleTheme}
                style={{backgroundColor: theme.secondary, color: theme.primary, fontFamily: "Lexend Deca"}}>
            Toggle Theme
        </button>
        <STLViewer url="/ControllerForge.stl"/>

    </div>);
};

function App() {
    return (<ThemeProvider>
        <AppContent/>
    </ThemeProvider>);
}

export default App;
