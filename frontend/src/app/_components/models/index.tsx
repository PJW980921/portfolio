'use client';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { Ref, useCallback, useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import React from 'react';

type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
  };
};

interface ModelRefProps {
  position: {
    y: number;
    x: number;
    z: number;
  };
  rotation: {
    y: number;
    x: number;
    z: number;
  };
}

export const PjwCharacter = React.memo(
  (props: JSX.IntrinsicElements['group']) => {
    const { nodes } = useGLTF('/models/pjw.glb') as unknown as GLTFResult;

    const modelRef = useRef<ModelRefProps>();

    useFrame((state) => {
      if (modelRef.current) {
        modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.15;
      }
    });

    const handleMouseMove = (event: MouseEvent) => {
      if (modelRef.current) {
        const deltaX = event.movementX * 0.05; // 회전 속도 조절
        modelRef.current.rotation.y += deltaX; // y축 회전
      }
    };

    const handleMouseDown = useCallback(() => {
      window.addEventListener('mousemove', handleMouseMove);
    }, []);

    const handleMouseUp = useCallback(() => {
      window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);

      return () => {
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }, [handleMouseDown, handleMouseUp]);

    return (
      <group
        {...props}
        dispose={null}
        ref={modelRef as Ref<THREE.Group<THREE.Object3DEventMap>> | undefined}
        scale={[1, 1, 1]}
        position={[0, -1.5, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={nodes.mesh_0.material}
          scale={1}
          onClick={() => handleMouseMove}
        />
      </group>
    );
  }
);
PjwCharacter.displayName = 'PjwCharacter';
export default PjwCharacter;
useGLTF.preload('/models/pjw.glb');
