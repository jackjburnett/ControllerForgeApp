import React, {useRef, useEffect, useContext} from 'react';
import {Canvas, useLoader} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import {STLLoader} from 'three/examples/jsm/loaders/STLLoader';
import * as THREE from 'three';
import './STLViewer.css';
import {ThemeContext} from './ThemeContext';

const Model = ({url}) => {
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

    const {theme} = useContext(ThemeContext);

    return (
        <mesh geometry={geometry} ref={meshRef}>
            <meshStandardMaterial color={theme.secondary}/>
        </mesh>
    );
};

const STLViewer = ({url}) => {
    return (
        <Canvas className="stl-canvas" camera={{position: [0, 0, 200]}}>
            <ambientLight intensity={2}/>
            <directionalLight position={[10, 10, 10]} intensity={1}/>
            <pointLight position={[-10, -10, -10]} intensity={1}/>
            <OrbitControls/>
            <React.Suspense fallback={<span>Loading...</span>}>
                <Model url={url}/>
            </React.Suspense>
        </Canvas>
    );
};

export default STLViewer;
