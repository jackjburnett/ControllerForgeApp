import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import STLViewer from './components/STLViewer';
import {ThemeProvider, ThemeContext} from './components/ThemeContext';
import './fonts.css';
import InfoIcon from '@mui/icons-material/Info';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import {thirdParty} from "./components/colors";
import {
    ParametersCenterContent,
    STEPCenterContent,
    PCBCenterContent,
    ConflictCenterContent
} from './components/CenterContent';

const AppContent = () => {
    const {theme, toggleTheme} = React.useContext(ThemeContext);
    const [centerContent, setCenterContent] = useState(<STLViewer url="/ControllerForge.stl"/>);

    const handleCenterContentChange = (type) => {
        if (type === 'ParametersCenterContent') {
            setCenterContent(<ParametersCenterContent handleCenterContentChange={handleCenterContentChange}/>);
        } else if (type === 'STEPCenterContent') {
            setCenterContent(<STEPCenterContent handleCenterContentChange={handleCenterContentChange}/>);
        } else if (type === 'PCBCenterContent') {
            setCenterContent(<PCBCenterContent handleCenterContentChange={handleCenterContentChange}/>);
        } else if (type === 'ConflictCenterContent') {
            setCenterContent(<ConflictCenterContent handleCenterContentChange={handleCenterContentChange}/>);
        } else {
            setCenterContent(<STLViewer url="/ControllerForge.stl"/>);
        }
    };

    return (<div style={{background: theme.primary}}>
        <div className="logo"
             style={{color: theme.secondary}}>
            <img src={"./logo192.png"} alt={"Logo"}></img>
            ControllerForge
        </div>
        <button
            onClick={() => handleCenterContentChange('ParametersCenterContent')}
            style={{backgroundColor: theme.secondary, color: theme.primary}}>
            Get Controller Parameters
        </button>
        <button
            onClick={() => handleCenterContentChange('STEPCenterContent')}
            style={{backgroundColor: theme.tertiary, color: theme.contrast}}>
            Generate STEP
        </button>
        <button
            onClick={() => handleCenterContentChange('PCBCenterContent')}
            style={{backgroundColor: theme.tertiary, color: theme.contrast, fontFamily: "Lexend Deca"}}>
            Generate PCB
        </button>
        <button
            onClick={() => handleCenterContentChange('ConflictCenterContent')}
            style={{backgroundColor: theme.tertiary, color: theme.contrast, fontFamily: "Lexend Deca"}}>
            Conflict Checker
        </button>
        <button onClick={toggleTheme}
                style={{border: 'none', background: 'none', cursor: 'pointer'}}>
            <DarkModeIcon style={{fontSize: 32, color: theme.contrast}}/>
        </button>
        <button style={{border: 'none', background: 'none', cursor: 'pointer'}}>
            <InfoIcon style={{fontSize: 32, color: theme.contrast}}/>
        </button>
        <div className="centerContent" style={{background: theme.tertiary}}>
            {centerContent}
        </div>
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
            <a href="https://github.com/jackjburnett/ControllerForgeApp" target="_blank" rel="noreferrer">
                <GitHubIcon style={{fontSize: 32, color: theme.contrast}}/></a>
        </button>
    </div>);
};

function App() {
    return (<ThemeProvider>
        <AppContent/>
    </ThemeProvider>);
}

export default App;
