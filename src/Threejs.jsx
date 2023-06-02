import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const divStyle = {
    color: 'white'
};

class Threejs extends React.Component {

    render() {
        return (
            <div className='Three-container'>
            <Canvas
                camera={{ position: [2, 0, 12.25], fov: 15 }}
                style={{
                    backgroundColor: '#111a21',
                    width: '100%',
                    height: '100%'
                }}
            >
                <ambientLight intensity={1.25} />
                <ambientLight intensity={0.1} />
                <directionalLight intensity={0.4} />
                <Box material-color="hotpink" />

                <OrbitControls />
            </Canvas>
            </div>
        )
    }
}

export default Threejs