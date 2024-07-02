import React from "react";
import {GenerateSTEP} from "./API";

const ParametersCenterContent = ({handleCenterContentChange}) => (
    <div>
        <h1>Get Controller Parameters</h1>
        <p>Details about getting controller parameters.</p>
        <button onClick={() => handleCenterContentChange('DefaultContent')}>Submit</button>
    </div>
);

const STEPCenterContent = ({handleCenterContentChange}) => (
    <div>
        <h1>Generate STEP</h1>
        <p>Details about generating STEP files.</p>
        <button onClick={() => GenerateSTEP()}>Submit</button>
    </div>
);

const PCBCenterContent = ({handleCenterContentChange}) => (
    <div>
        <h1>Generate PCB</h1>
        <p>Details about generating PCBs.</p>
        <button onClick={() => handleCenterContentChange('DefaultContent')}>Submit</button>
    </div>
);

const ConflictCenterContent = ({handleCenterContentChange}) => (
    <div>
        <h1>Conflict Checker</h1>
        <p>Details about the conflict checker.</p>
        <button onClick={() => handleCenterContentChange('DefaultContent')}>Submit</button>
    </div>
);

export {ParametersCenterContent, STEPCenterContent, PCBCenterContent, ConflictCenterContent};