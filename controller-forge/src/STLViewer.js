// src/STLViewer.js
import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

const Model = ({ url }) => {
    const geometry = useLoader(STLLoader, url);
    return (
        <mesh geometry={geometry}>
            <meshStandardMaterial color="orange" />
        </mesh>
    );
};

const STLViewer = ({ url }) => {
    return (
        <Canvas style={{ height: '100vh', width: '100vw' }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <OrbitControls />
            <React.Suspense fallback={null}>
                <Model url={url} />
            </React.Suspense>
        </Canvas>
    );
};

export default STLViewer;