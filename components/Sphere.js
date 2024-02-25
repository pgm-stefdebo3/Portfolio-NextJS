import React from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { Octahedron, Edges } from '@react-three/drei';

const OctahedronComponent = () => {
  // Define a ref to the Octahedron mesh
  const octahedronRef = React.useRef();

  // Use the useFrame hook to animate the rotation
  useFrame(() => {
    if (octahedronRef.current) {
      octahedronRef.current.rotation.x += 0.01;
      octahedronRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Octahedron args={[2, 3]} ref={octahedronRef}>
        <meshStandardMaterial color={0x000000} />
        <Edges color={0x34FEE3} />
      </Octahedron>
    </>
  );
};

export default OctahedronComponent;