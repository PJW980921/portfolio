'use client';
import { Environment } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import clsx from 'clsx';
import { ReactNode, Suspense } from 'react';

interface renderModelProps {
  children: ReactNode;
  className: string;
}
const RenderModel = ({ children, className }: renderModelProps) => {
  return (
    <Canvas className={clsx('w-screen h-screen -z-10 relative', className)}>
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="city" />
    </Canvas>
  );
};

export default RenderModel;
