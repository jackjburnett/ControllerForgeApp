import React from 'react';
import './App.css';
import STLViewer from './STLViewer';
import {ThemeProvider, ThemeContext} from './ThemeContext';
import './fonts.css';

const AppContent = () => {
    const {theme, toggleTheme} = React.useContext(ThemeContext);

    return (<div style={{background: theme.primary}}>
        <div className="logo" style={{color: theme.secondary}}>
            <img src={"./logo192.png"}></img>
            ControllerForge
        </div>
        <button onClick={toggleTheme}
                style={{backgroundColor: theme.secondary, color: theme.primary, fontFamily: "Lexend Deca"}}>
            Toggle Theme
        </button>
        <button style={{backgroundColor: theme.tertiary, color: theme.contrast, fontFamily: "Lexend Deca"}}>
            Button 2
        </button>
        <button style={{backgroundColor: theme.tertiary, color: theme.contrast, fontFamily: "Lexend Deca"}}>
            Button 3
        </button>
        <button style={{backgroundColor: theme.tertiary, color: theme.contrast, fontFamily: "Lexend Deca"}}>
            Button 4
        </button>
        <STLViewer url="/ControllerForge.stl"/>
        <a><i className="fa fa-dribbble fa-4x"></i></a>

    </div>);
};

function App() {
    return (<ThemeProvider>
        <AppContent/>
    </ThemeProvider>);
}

export default App;
