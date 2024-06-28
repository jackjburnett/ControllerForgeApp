import React, { useRef, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import * as THREE from 'three';
import './STLViewer.css';
import {lightTheme, darkTheme} from './colors';
const colors = darkTheme


const Model = ({ url }) => {
    const geometry = useLoader(STLLoader, url);
    const meshRef = useRef();

    useEffect(() => {
        if (geometry) {
            geometry.center(); // Center the geometry
            const box = new THREE.Box3().setFromObject(meshRef.current);
            const center = box.getCenter(new THREE.Vector3());
            meshRef.current.position.x = -center.x;
            meshRef.current.position.y = -center.y;
            meshRef.current.position.z = -center.z;
        }
    }, [geometry]);

    return (
        <mesh geometry={geometry} ref={meshRef}>
            <meshStandardMaterial color={colors.accent} />
        </mesh>
    );
};

const STLViewer = ({ url }) => {
    return (
        <div className="stl-viewer-container" style={{background:colors.primary}}>
        <Canvas className="stl-canvas" camera={{ position: [0, 0, 200]}}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <OrbitControls />
            <React.Suspense fallback={null}>
                <Model url={url} />
            </React.Suspense>
        </Canvas>
        </div>
    );
};

export default STLViewer;