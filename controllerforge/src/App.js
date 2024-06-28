import React from 'react';
import './App.css';
import STLViewer from './STLViewer';
import {ThemeProvider, ThemeContext} from './ThemeContext';
import './fonts.css';
import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';

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
        <button style={{border: 'none', background: 'none', cursor: 'pointer'}}>
            <InfoIcon style={{fontSize: 32, color: theme.contrast}}/>
        </button>
        <STLViewer url="/ControllerForge.stl"/>
        <button style={{backgroundColor: theme.tertiary, color: theme.contrast, fontFamily: "Lexend Deca"}}>
            Button 2
        </button>
        <button style={{backgroundColor: theme.tertiary, color: theme.contrast, fontFamily: "Lexend Deca"}}>
            Button 3
        </button>
        <button style={{border: 'none', background: 'none', cursor: 'pointer'}}>
            <GitHubIcon style={{fontSize: 32, color: theme.contrast}}/>
        </button>
    </div>);
};

function App() {
    return (<ThemeProvider>
        <AppContent/>
    </ThemeProvider>);
}

export default App;
