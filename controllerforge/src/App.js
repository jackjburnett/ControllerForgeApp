import React from 'react';
import './App.css';
import STLViewer from './STLViewer';
import {ThemeProvider, ThemeContext} from './ThemeContext';
import './fonts.css';
import InfoIcon from '@mui/icons-material/Info';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import {thirdParty} from "./colors";

const AppContent = () => {
    const {theme, toggleTheme} = React.useContext(ThemeContext);

    return (<div style={{background: theme.primary}}>
        <div className="logo" style={{color: theme.secondary}}>
            <img src={"./logo192.png"} alt={"Logo"}></img>
            ControllerForge
        </div>
        <button style={{backgroundColor: theme.secondary, color: theme.primary, fontFamily: "Lexend Deca"}}>
            Get Controller Parameters
        </button>
        <button style={{backgroundColor: theme.tertiary, color: theme.contrast, fontFamily: "Lexend Deca"}}>
            Generate STEP
        </button>
        <button style={{backgroundColor: theme.tertiary, color: theme.contrast, fontFamily: "Lexend Deca"}}>
            Generate PCB
        </button>
        <button style={{backgroundColor: theme.tertiary, color: theme.contrast, fontFamily: "Lexend Deca"}}>
            Conflict Checker
        </button>
        <button onClick={toggleTheme}
                style={{border: 'none', background: 'none', cursor: 'pointer'}}>
            <DarkModeIcon style={{fontSize: 32, color: theme.contrast}}/>
        </button>
        <button style={{border: 'none', background: 'none', cursor: 'pointer'}}>
            <InfoIcon style={{fontSize: 32, color: theme.contrast}}/>
        </button>
        <STLViewer url="/ControllerForge.stl"/>
        <button style={{
            backgroundColor: thirdParty.orcaSlicerBackground,
            color: thirdParty.orcaSlicerText,
            fontFamily: "Lexend Deca"
        }}>
            OrcaSlicer
        </button>
        <button style={{
            backgroundColor: thirdParty.kicadBackground,
            color: thirdParty.kicadText,
            fontFamily: "Lexend Deca"
        }}>
            KiCad
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
