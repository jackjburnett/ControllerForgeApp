import React, { useContext } from 'react';
import './App.css';
import STLViewer from './STLViewer';
import { ThemeProvider, ThemeContext } from './ThemeContext';

const AppContent = () => {
    const { theme, toggleTheme } = React.useContext(ThemeContext);

    return (
        <div style={{ background: theme.primary }}>
            <STLViewer url="/ControllerForge.stl" />
            <button onClick={toggleTheme} style={{ backgroundColor: theme.secondary, color: theme.primary }}>
                Toggle Theme
            </button>
        </div>
    );
};

function App() {
    return(
    <ThemeProvider>
        <AppContent />
    </ThemeProvider>
  );
}

export default App;
