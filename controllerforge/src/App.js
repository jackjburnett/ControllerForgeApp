import React, { useState } from 'react';
import './App.css';
import STLViewer from './STLViewer';
import {lightTheme, darkTheme} from './colors';

function App() {
    const [currentTheme, setCurrentTheme] = useState(darkTheme); // Initialize state with darkTheme

    const toggleTheme = () => {
        // Toggle between lightTheme and darkTheme based on currentTheme
        setCurrentTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
    };

  return (
      <div style={{background: currentTheme.background}}>
          <STLViewer url="/ControllerForge.stl"/>
          <button onClick={toggleTheme}>Toggle Theme</button>
      </div>

  );
}

export default App;
